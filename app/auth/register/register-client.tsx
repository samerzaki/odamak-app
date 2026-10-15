"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { InlineAlert } from "@/components/ui/inline-alert";
import { PasswordStrength } from "@/components/ui/password-strength";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialButtons } from "@/components/auth/social-buttons";
import { PhoneInputField, type PhoneInputValue } from "@/components/ui/phone-input";
import { CheckCircle, Loader2 } from "lucide-react";
import { checkEmailExists, sendOtp } from "@/lib/api-auth";
import { Turnstile } from "@/components/auth/turnstile";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [phoneData, setPhoneData] = useState<PhoneInputValue>({
    phone: "",
    isValid: false,
    country: null,
    inputValue: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [sendAlerts, setSendAlerts] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const router = useRouter();
  const { t, language } = useLanguage();
  const handleTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const handleTurnstileExpire = useCallback(() => setTurnstileToken(""), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!turnstileToken) {
      setError(t.common.securityCheckError);
      return;
    }
    setIsLoading(true);

    // Validate password strength
    if (formData.password.length < 6) {
      setError(t.pages.register.errorPasswordLength);
      setIsLoading(false);
      return;
    }

    try {
      const availability = await checkEmailExists(formData.email);
      if (!availability.data?.available) {
        setError(language === "ar" ? "هذا البريد الإلكتروني مستخدم بالفعل" : "This email address is already in use");
        return;
      }

      await sendOtp(formData.email);
      sessionStorage.setItem(
        "gold_pending_registration",
        JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: phoneData.phone || undefined,
          confirmPassword: formData.password,
          sendAlerts,
          turnstileToken,
        })
      );
      router.push(`/auth/verify-otp?email=${encodeURIComponent(formData.email)}&purpose=registration`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.pages.register.errorDefault);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell variant="register" title={t.pages.register.title} subtitle={t.pages.register.subtitle}>
      <SocialButtons />

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-line-2" />
        <span className="text-[12.5px] text-muted shrink-0">{t.pages.register.socialDivider}</span>
        <div className="flex-1 h-px bg-line-2" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t.pages.register.firstNameLabel}</Label>
            <Input
              id="firstName"
              type="text"
              placeholder={t.pages.register.firstNamePlaceholder}
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">{t.pages.register.lastNameLabel}</Label>
            <Input
              id="lastName"
              type="text"
              placeholder={t.pages.register.lastNamePlaceholder}
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t.pages.register.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="num"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t.pages.register.phoneLabel}</Label>
          <PhoneInputField
            value={phoneData.phone}
            onChange={setPhoneData}
            defaultCountry="eg"
            disabled={isLoading}
            placeholder="+201234567890"
          />
          {phoneData.phone && phoneData.phone.length > 4 && !phoneData.isValid && (
            <p className="text-[12px] text-muted">{t.pages.register.phoneInvalid}</p>
          )}
          {phoneData.isValid && (
            <p className="text-[12px] text-up flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              {t.pages.register.phoneValid}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="password">{t.pages.register.passwordLabel}</Label>
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
            placeholder={t.pages.register.passwordPlaceholder}
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="num"
          />
          {formData.password && (
            <PasswordStrength
              password={formData.password}
              labels={[
                t.pages.passwordStrength.empty,
                t.pages.passwordStrength.weak,
                t.pages.passwordStrength.fair,
                t.pages.passwordStrength.strong,
              ]}
            />
          )}
        </div>

        <Checkbox checked={sendAlerts} onCheckedChange={setSendAlerts} label={t.pages.register.sendAlerts} disabled={isLoading} />

        {error && <InlineAlert variant="error">{error}</InlineAlert>}

        <Button type="submit" className="w-full h-12" size="lg" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin" />}
          {isLoading ? t.pages.register.submitting : t.pages.register.submitButton}
        </Button>

        <Turnstile onVerify={handleTurnstileVerify} onExpire={handleTurnstileExpire} language={language} action="register" />
      </form>

      <div className="mt-6 text-center text-[13.5px] text-muted">
        {t.pages.register.hasAccount}{" "}
        <Link href="/auth/login" className="font-semibold text-gold hover:underline">
          {t.pages.register.loginLink}
        </Link>
      </div>

      <p className="mt-4 text-[12.5px] text-center text-dim leading-relaxed">
        {t.pages.register.termsText}{" "}
        <Link href="/terms" className="underline hover:text-gold">
          {t.pages.register.termsLink}
        </Link>{" "}
        {t.pages.register.and}{" "}
        <Link href="/privacy" className="underline hover:text-gold">
          {t.pages.register.privacyLink}
        </Link>
      </p>
    </AuthShell>
  );
}
