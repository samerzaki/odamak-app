"use client";

import { useCallback, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InlineAlert } from "@/components/ui/inline-alert";
import { PasswordStrength } from "@/components/ui/password-strength";
import { AuthShell } from "@/components/auth/auth-shell";
import { Turnstile } from "@/components/auth/turnstile";
import { resetPassword } from "@/lib/api-auth";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const BackArrow = isRTL ? ArrowLeft : ArrowRight;

  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const handleTurnstileVerify = useCallback((value: string) => setTurnstileToken(value), []);
  const handleTurnstileExpire = useCallback(() => setTurnstileToken(""), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError(t.pages.resetPassword.errorPasswordMismatch);
      return;
    }

    if (password.length < 6) {
      setError(t.pages.resetPassword.errorPasswordLength);
      return;
    }

    if (!token || !email) {
      setError(t.pages.resetPassword.errorInvalidLink);
      return;
    }
    if (!turnstileToken) {
      setError(t.common.securityCheckError);
      return;
    }

    setIsLoading(true);

    try {
      await resetPassword({
        email,
        token,
        password,
        password_confirmation: confirmPassword,
        'cf-turnstile-response': turnstileToken,
      });
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : t.pages.resetPassword.errorDefault;
      setError(message);
      setTurnstileToken("");
      setTurnstileKey((value) => value + 1);
    }

    setIsLoading(false);
  };

  if (success) {
    return (
      <AuthShell showTabs={false}>
        <div className="text-center">
          <div className="mx-auto w-14 h-14 bg-up-soft rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-7 h-7 text-up" />
          </div>
          <h2 className="font-heading text-[18px] font-semibold text-up mb-1.5">
            {t.pages.resetPassword.successTitle}
          </h2>
          <p className="text-[13px] text-muted">{t.pages.resetPassword.successRedirect}</p>
        </div>
      </AuthShell>
    );
  }

  if (!token || !email) {
    return (
      <AuthShell showTabs={false} title={t.pages.resetPassword.invalidLinkTitle} subtitle={t.pages.resetPassword.invalidLinkDescription}>
        <div className="space-y-4">
          <Link href="/auth/forgot-password">
            <Button className="w-full h-12" size="lg">
              {t.pages.resetPassword.requestNewLink}
            </Button>
          </Link>
          <div className="text-center">
            <Link href="/auth/login" className="inline-flex items-center gap-2 text-[13px] text-gold hover:underline">
              <BackArrow className="h-4 w-4" />
              {t.pages.resetPassword.backToLogin}
            </Link>
          </div>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell showTabs={false} title={t.pages.resetPassword.title} subtitle={t.pages.resetPassword.subtitle}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">{t.pages.resetPassword.newPasswordLabel}</Label>
          <Input
            id="password"
            type="password"
            placeholder={t.pages.resetPassword.newPasswordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="num"
            autoFocus
          />
          {password && (
            <PasswordStrength
              password={password}
              labels={[
                t.pages.passwordStrength.empty,
                t.pages.passwordStrength.weak,
                t.pages.passwordStrength.fair,
                t.pages.passwordStrength.strong,
              ]}
            />
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">{t.pages.resetPassword.confirmPasswordLabel}</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder={t.pages.resetPassword.confirmPasswordPlaceholder}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isLoading}
            className="num"
          />
          <p className="text-[12px] text-dim">{t.pages.resetPassword.passwordHint}</p>
        </div>

        <Turnstile key={turnstileKey} onVerify={handleTurnstileVerify} onExpire={handleTurnstileExpire} language={language} action="reset-password" />

        {error && <InlineAlert variant="error">{error}</InlineAlert>}

        <Button type="submit" className="w-full h-12" size="lg" disabled={isLoading || !turnstileToken}>
          {isLoading ? t.pages.resetPassword.submitting : t.pages.resetPassword.submitButton}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/auth/login" className="inline-flex items-center gap-2 text-[13px] text-gold hover:underline">
          <BackArrow className="h-4 w-4" />
          {t.pages.resetPassword.backToLogin}
        </Link>
      </div>
    </AuthShell>
  );
}

export default function ResetPasswordPage() {
  const { t } = useLanguage();

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted">{t.pages.resetPassword.loading}</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
