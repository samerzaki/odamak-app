"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InlineAlert } from "@/components/ui/inline-alert";
import { AuthShell } from "@/components/auth/auth-shell";
import { forgotPassword } from "@/lib/api-auth";
import { ArrowRight, ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { Turnstile } from "@/components/auth/turnstile";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const BackArrow = isRTL ? ArrowLeft : ArrowRight;
  const handleTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const handleTurnstileExpire = useCallback(() => setTurnstileToken(""), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!turnstileToken) {
      setError(t.common.securityCheckError);
      return;
    }

    setIsLoading(true);

    try {
      await forgotPassword({
        email,
        'cf-turnstile-response': turnstileToken,
      });
      setSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : t.pages.forgotPassword.errorDefault;
      setError(message);
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
            {t.pages.forgotPassword.successTitle}
          </h2>
          <p className="text-[13px] text-muted mb-6">{t.pages.forgotPassword.successDescription}</p>
        </div>

        <InlineAlert variant="success" className="mb-4">
          {t.pages.forgotPassword.successEmailSent} <strong className="num">{email}</strong>
        </InlineAlert>

        <p className="text-center text-[13px] text-muted mb-4">
          {t.pages.forgotPassword.successOpenEmail}
        </p>

        <Link href="/auth/login">
          <Button className="w-full h-12" size="lg">
            <BackArrow className="h-4 w-4" />
            {t.pages.forgotPassword.backToLogin}
          </Button>
        </Link>

        <p className="mt-4 text-[12px] text-center text-dim">{t.pages.forgotPassword.successCheckSpam}</p>
      </AuthShell>
    );
  }

  return (
    <AuthShell showTabs={false} title={t.pages.forgotPassword.title} subtitle={t.pages.forgotPassword.subtitle}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t.pages.forgotPassword.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="w-full"
            autoFocus
          />
          <p className="text-[12px] text-dim">{t.pages.forgotPassword.emailHint}</p>
        </div>

        <Turnstile
          onVerify={handleTurnstileVerify}
          onExpire={handleTurnstileExpire}
          language={isRTL ? "ar" : "en"}
          action="forgot-password"
        />

        {error && <InlineAlert variant="error">{error}</InlineAlert>}

        <Button type="submit" className="w-full h-12" size="lg" disabled={isLoading || !turnstileToken}>
          <Mail className="h-4 w-4" />
          {isLoading ? t.pages.forgotPassword.submitting : t.pages.forgotPassword.submitButton}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/auth/login" className="inline-flex items-center gap-2 text-[13px] text-gold hover:underline">
          <BackArrow className="h-4 w-4" />
          {t.pages.forgotPassword.backToLogin}
        </Link>
      </div>

      <p className="mt-6 text-[12.5px] text-center text-dim">
        {t.pages.forgotPassword.rememberedPassword}{" "}
        <Link href="/auth/login" className="text-gold hover:underline">
          {t.pages.forgotPassword.loginLink}
        </Link>
      </p>
    </AuthShell>
  );
}
