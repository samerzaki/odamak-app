"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { InlineAlert } from "@/components/ui/inline-alert";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialButtons } from "@/components/auth/social-buttons";
import { Turnstile } from "@/components/auth/turnstile";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const { login } = useAuth();
  const { t, language } = useLanguage();
  const handleTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const handleTurnstileExpire = useCallback(() => setTurnstileToken(""), []);

  const emailInvalid = email.length > 3 && !EMAIL_PATTERN.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!turnstileToken) {
      setError(t.common.securityCheckError);
      return;
    }
    setIsLoading(true);

    const result = await login(email, password, turnstileToken);

    if (!result.success) {
      setError(result.error || t.pages.login.errorDefault);
      setIsLoading(false);
    }
    // On success, GuestGuard will automatically redirect to home
  };

  return (
    <AuthShell variant="login" title={t.pages.login.title} subtitle={t.pages.login.subtitle}>
      <SocialButtons />

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-line-2" />
        <span className="text-[12.5px] text-muted shrink-0">{t.pages.login.socialDivider}</span>
        <div className="flex-1 h-px bg-line-2" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t.pages.login.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className={emailInvalid ? "border-down focus-visible:border-down num" : "num"}
          />
          {emailInvalid && <p className="text-[12.5px] text-down">{t.pages.login.invalidEmail}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="password">{t.pages.login.passwordLabel}</Label>
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-[12.5px] font-semibold text-gold hover:underline"
            >
              {showPassword ? t.common.hide : t.common.show}
            </button>
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="num"
          />
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Checkbox checked={rememberMe} onCheckedChange={setRememberMe} label={t.pages.login.rememberMe} disabled={isLoading} />
          <Link href="/auth/forgot-password" className="text-[13px] font-semibold text-gold hover:underline">
            {t.pages.login.forgotPassword}
          </Link>
        </div>

        {error && <InlineAlert variant="error">{error}</InlineAlert>}

        <Button type="submit" className="w-full h-12" size="lg" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin" />}
          {isLoading ? t.pages.login.submitting : t.pages.login.submitButton}
        </Button>

        <Turnstile onVerify={handleTurnstileVerify} onExpire={handleTurnstileExpire} language={language} action="login" />
      </form>

      <div className="mt-6 text-center text-[13.5px] text-muted">
        {t.pages.login.noAccount}{" "}
        <Link href="/auth/register" className="font-semibold text-gold hover:underline">
          {t.pages.login.createAccount}
        </Link>
      </div>

      <p className="mt-4 text-[12.5px] text-center text-dim leading-relaxed">
        {t.pages.login.termsText}{" "}
        <Link href="/terms" className="underline hover:text-gold">
          {t.pages.login.termsLink}
        </Link>{" "}
        {t.pages.login.and}{" "}
        <Link href="/privacy" className="underline hover:text-gold">
          {t.pages.login.privacyLink}
        </Link>
      </p>
    </AuthShell>
  );
}
