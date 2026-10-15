export type Language = 'ar' | 'en';

export interface Translations {
  // Header
  header: {
    title: string;
    subtitle: string;
  };
  
  // Sidebar
  sidebar: {
    dashboard: string;
    goldPrices: string;
    goldCalculator: string;
    goldProducts: string;
    currencyPrices: string;
    silverPrices: string;
  };
  
  // Home Page
  home: {
    goldPricesTitle: string;
    goldPricesSubtitle: string;
    currencyPricesTitle: string;
    currencyPricesSubtitle: string;
    seeMore: string;
    bestBankRates: string;
    bestBankRatesSubtitle: string;
    viewAllBankRates: string;
  };
  
  // Gold Prices
  gold: {
    sellPrice: string;
    buyPrice: string;
    spread: string;
    live: string;
    karat24: string;
    karat21: string;
    karat18: string;
    pound: string;
    ounce: string;
    tableTitle: string;
    karatColumn: string;
    changeColumn: string;
    days30Column: string;
    workmanshipTitle: string;
    estimatedChip: string;
    globalIndicators: string;
    goldOunceLabel: string;
    silverOunceLabel: string;
  };
  
  // Currency
  currency: {
    table: string;
    cards: string;
    errorLoading: string;
    lastUpdate: string;
    lastUpdatePrefix: string;
    liveText: string;
    notAvailable: string;
    dollar: string;
    euro: string;
    currencyName: string;
    code: string;
    price: string;
    change: string;
    trend: string;
    usdName: string;
    eurName: string;
    gbpName: string;
    sarName: string;
    aedName: string;
    kwdName: string;
    egpName: string;
    searchBank: string;
    noSearchResults: string;
    best: string;
    highestBuyShort: string;
    lowestSellShort: string;
    buy: string;
    sell: string;
    gap: string;
    from: string;
    to: string;
    exchangeMethods: string;
    updating: string;
    highestBuyPrice: string;
    highestSellPrice: string;
    lowestBuyPrice: string;
    lowestSellPrice: string;
    unofficialChip: string;
    gapVsBanks: string;
    converterTitle: string;
    amountLabel: string;
    sourceLabel: string;
    bankSource: string;
    parallelSource: string;
    estimatedResult: string;
    banksTitle: string;
    bankColumn: string;
    bankNameColumn: string;
    todayColumn: string;
    loadingRates: string;
    noDataAvailable: string;
    unpinAria: string;
    pinAria: string;
  };
  
  // Market Insights
  insights: {
    title: string;
    highestGoldPrice: string;
    lowestGoldPrice: string;
    averageChange: string;
    highestCurrency: string;
    lowestCurrency: string;
    overallTrend: string;
    karat24Label: string;
    allKarats: string;
    markets: string;
    rising: string;
    falling: string;
    stable: string;
  };
  
  // Recent Activity
  activity: {
    title: string;
    viewAll: string;
    changedTo: string;
    noRecentUpdates: string;
  };
  
  // Common
  common: {
    egp: string;
    loading: string;
    error: string;
    appName: string;
    errorPasswordMismatch: string;
    errorPasswordLength: string;
    comingSoon?: string;
    show: string;
    hide: string;
    securityCheckError: string;
  };

  alerts?: { createAlert?: string };
  errors?: { fetchError?: string };
  
  // Charts
  charts: {
    chartTitle: string;
    defaultGoldChartTitle: string;
    period24h: string;
    period7d: string;
    period30d: string;
    period1y: string;
    periodAll: string;
    usdExchangeRate: string;
    usdSellRate: string;
    usdBuyRate: string;
    loadingData: string;
    errorLoadingTitle: string;
    errorLoadingChartMessage: string;
  };

  // Pages
    pages: {
      login: {
        appTitle: string;
        appSubtitle: string;
        title: string;
        subtitle: string;
        emailLabel: string;
        passwordLabel: string;
        forgotPassword: string;
        submitButton: string;
        submitting: string;
        or: string;
        socialDivider: string;
        demoLogin: string;
        noAccount: string;
        createAccount: string;
        termsText: string;
        termsLink: string;
        and: string;
        privacyLink: string;
        footerText: string;
        errorDefault: string;
        rememberMe: string;
        invalidEmail: string;
      };
      register: {
        appTitle: string;
        appSubtitle: string;
        title: string;
        subtitle: string;
        firstNameLabel: string;
        firstNamePlaceholder: string;
        lastNameLabel: string;
        lastNamePlaceholder: string;
        emailLabel: string;
        phoneLabel: string;
        passwordLabel: string;
        passwordPlaceholder: string;
        passwordHint: string;
        confirmPasswordLabel: string;
        confirmPasswordPlaceholder: string;
        submitButton: string;
        submitting: string;
        or: string;
        socialDivider: string;
        demoRegister: string;
        hasAccount: string;
        loginLink: string;
        termsText: string;
        termsLink: string;
        and: string;
        privacyLink: string;
        benefitsTitle: string;
        benefit1: string;
        benefit2: string;
        benefit3: string;
        benefit4: string;
        footerText: string;
        successMessage: string;
        errorPasswordMismatch: string;
        errorPasswordLength: string;
        errorDefault: string;
        sendAlerts: string;
        phoneInvalid: string;
        phoneValid: string;
      };
      forgotPassword: {
        title: string;
        subtitle: string;
        emailLabel: string;
        emailHint: string;
        submitButton: string;
        submitting: string;
        backToLogin: string;
        successMessage: string;
        successTitle: string;
        successDescription: string;
        successEmailSent: string;
        successOpenEmail: string;
        successCheckSpam: string;
        rememberedPassword: string;
        loginLink: string;
        checkSpamFooter: string;
        goToVerify: string;
        errorDefault: string;
      };
      resetPassword: {
        title: string;
        subtitle: string;
        newPasswordLabel: string;
        newPasswordPlaceholder: string;
        confirmPasswordLabel: string;
        confirmPasswordPlaceholder: string;
        passwordHint: string;
        submitButton: string;
        submitting: string;
        backToLogin: string;
        successTitle: string;
        successRedirect: string;
        invalidLinkTitle: string;
        invalidLinkDescription: string;
        requestNewLink: string;
        errorPasswordMismatch: string;
        errorPasswordLength: string;
        errorInvalidLink: string;
        errorDefault: string;
        loading: string;
      };
      verifyOtp: {
        title: string;
        subtitle: string;
        subtitlePhone: string;
        resendButton: string;
        resendIn: string;
        seconds: string;
        skipButton: string;
        skipWarning: string;
        noCode: string;
        successTitle: string;
        successRedirect: string;
        backToLogin: string;
        errorDefault: string;
        newPasswordTitle: string;
        newPasswordLabel: string;
        confirmPasswordLabel: string;
        resetPasswordButton: string;
        resetSuccess: string;
      };
      social: {
        google: string;
        apple: string;
        facebook: string;
      };
      passwordStrength: {
        empty: string;
        weak: string;
        fair: string;
        strong: string;
      };
      authAside: {
        loginTitle: string;
        loginSubtitle: string;
        registerTitle: string;
        registerSubtitle: string;
        livePrices: string;
        referencePrices: string;
        benefitPortfolioTitle: string;
        benefitPortfolioDesc: string;
        benefitAlertsTitle: string;
        benefitAlertsDesc: string;
        benefitCalculatorsTitle: string;
        benefitCalculatorsDesc: string;
        benefitSyncTitle: string;
        benefitSyncDesc: string;
      };
      settings: {
        title: string;
        subtitle: string;
        tabs: {
          account: string;
          phone: string;
          security: string;
          notifications: string;
        };
        profileSection: string;
        profileDescription: string;
        nameLabel: string;
        emailLabel: string;
        firstNameLabel: string;
        lastNameLabel: string;
        editProfileButton: string;
        saveButton: string;
        savingButton: string;
        profileUpdated: string;
        errorUpdateProfile: string;
        deleteButton: string;
        changeEmailSection: string;
        changeEmailDescription: string;
        changeEmailButton: string;
        newEmailLabel: string;
        changingEmail: string;
        emailOtpSent: string;
        newEmailTaken: string;
        newEmailSameAsCurrent: string;
        emailOtpTitle: string;
        emailOtpSubtitle: string;
        emailChangeSuccess: string;
        changePasswordSection: string;
        changePasswordDescription: string;
        changePasswordButton: string;
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
        confirmPasswordLabel: string;
        passwordHint: string;
        changingPassword: string;
        passwordChanged: string;
        cancel: string;
        signOut: string;
        savedLabel: string;
        unsavedChanges: string;
        showPasswords: string;
        hidePasswords: string;
        passwordRuleLength: string;
        passwordRuleNumber: string;
        passwordRuleMatch: string;
        connectedAccounts: {
          title: string;
          hint: string;
          connect: string;
          disconnect: string;
          notConnected: string;
        };
        sessions: {
          title: string;
          subtitle: string;
          thisDevice: string;
        };
        topics: {
          title: string;
          subtitle: string;
          priceAlerts: string;
          priceAlertsDesc: string;
          dailySummary: string;
          dailySummaryDesc: string;
          marketNews: string;
          marketNewsDesc: string;
          portfolioChanges: string;
          portfolioChangesDesc: string;
        };
        notificationsSection: string;
        notificationsDescription: string;
        comingSoonBadge: string;
        comingSoonNotice: string;
        emailNotifications: string;
        emailNotificationsDesc: string;
        smsNotifications: string;
        smsNotificationsDesc: string;
        smsRequiresPhone: string;
        whatsappNotifications: string;
        whatsappNotificationsDesc: string;
        whatsappRequiresPhone: string;
        telegramNotifications: string;
        telegramNotificationsDesc: string;
        linkTelegram: string;
        linked: string;
        unlink: string;
        unlinkConfirm: string;
        telegramModalTitle: string;
        openTelegram: string;
        copyLink: string;
        linkCopied: string;
        waitingForLink: string;
        telegramLinkSuccess: string;
        phone: {
          title: string;
          description: string;
          addButton: string;
          noPhones: string;
          noPhonesDescription: string;
          newPhoneLabel: string;
          phonePlaceholder: string;
          phoneIncomplete: string;
          phoneValid: string;
          addAndVerify: string;
          sending: string;
          verify: string;
          setDefault: string;
          defaultBadge: string;
          verified: string;
          notVerified: string;
          deleteConfirm: string;
          errorLoad: string;
          errorAdd: string;
          errorVerify: string;
          errorDelete: string;
          errorSetDefault: string;
          retry: string;
          errorLoadDescription: string;
          otpTitle: string;
          otpSubtitle: string;
          otpSuccess: string;
          otpSuccessDesc: string;
          otpNoCode: string;
          otpError: string;
          otpResend: string;
          otpResendIn: string;
          otpSeconds: string;
        };
      };
      currency: {
        title: string;
        subtitle: string;
      };
      portfolio: {
        title: string;
        subtitle: string;
        comingSoon: string;
        lastUpdated: string;
        hideNumbers: string;
        showNumbers: string;
        totalWealth: string;
        totalProfitLoss: string;
        assetDistribution: string;
        all: string;
        gold: string;
        silver: string;
        currencies: string;
        crypto: string;
        currentValue: string;
        profitLoss: string;
        addAsset: string;
        recordBuy: string;
        edit: string;
        delete: string;
        type: string;
        amount: string;
        buyPrice: string;
        pricePerUnit: string;
        date: string;
        save: string;
        cancel: string;
        noAssets: string;
        noAssetsDescription: string;
        assetsSuffix: string;
        purchaseValue: string;
        pricedAssets: string;
        ofLabel: string;
        bestCategory: string;
        notAvailable: string;
        notRecorded: string;
        distributionByValue: string;
        distributionByCount: string;
        myAssets: string;
        viewCards: string;
        viewTable: string;
        emptyTitle: string;
        emptyDescription: string;
        addAssetTitle: string;
        addAssetSubtitle: string;
        assetNameLabel: string;
        assetNamePlaceholderGold: string;
        assetNamePlaceholderCrypto: string;
        assetNamePlaceholderGeneric: string;
        amountLabelWeight: string;
        amountLabelCurrency: string;
        amountLabelCrypto: string;
        karatLabel: string;
        purityLabel: string;
        currencyLabel: string;
        coinLabel: string;
        buyPriceOptionalLabel: string;
        buyPriceHint: string;
        purchaseDateLabel: string;
        notesLabel: string;
        notesPlaceholder: string;
        saveAsset: string;
        deleteConfirmTitle: string;
        deleteConfirmDescription: string;
        columnAsset: string;
        columnAmount: string;
        columnPrice: string;
        columnCurrentValue: string;
        columnPurchaseValue: string;
        columnProfitLoss: string;
        infoNoteTitle: string;
        infoNoteBody: string;
        currentPriceLabel: string;
      };
      watchlist: {
        title: string;
        subtitle: string;
        comingSoon: string;
      };
      alerts: {
        title: string;
        subtitle: string;
        comingSoon: string;
        noAlertsTitle: string;
        noAlertsDescription: string;
        addFirstAlert: string;
        addAlert: string;
        editAlert: string;
        deleteAlert: string;
        targetPrice: string;
        condition: string;
        whenPriceDropsBelow: string;
        whenPriceRisesAbove: string;
        below: string;
        above: string;
        active: string;
        triggered: string;
        enabled: string;
        disabled: string;
        triggeredOn: string;
        createdAt: string;
        product: string;
        type: string;
        gold: string;
        currency: string;
        selectProduct: string;
        selectType: string;
        alertSaved: string;
        alertDeleted: string;
        enableAlert: string;
        disableAlert: string;
        total: string;
      };
    analytics: {
      title: string;
      subtitle: string;
      comingSoon: string;
    };
    gold: {
      title: string;
      subtitle: string;
    };
    karat: {
      invalidKarat: string;
      errorLoading: string;
      currentPrice: string;
      buyPrice: string;
      sellPrice: string;
      lastUpdate: string;
      high30d: string;
      low30d: string;
      avg30d: string;
      priceHistory: string;
      purity: string;
    };
    history: {
      title: string;
      subtitle: string;
      errorLoading: string;
    };
    chart: {
      title: string;
      subtitle: string;
      errorLoading: string;
    };
    calculator: {
      title: string;
      subtitle: string;
      plCalculator: string;
      sellCalculator: string;
      buyCalculator: string;
      item: string;
      pricePerGram: string;
      weight: string;
      weightGram: string;
      workmanshipPerGram: string;
      workmanshipPerGramOptional: string;
      karat: string;
      addAnotherItem: string;
      summary: string;
      totalInvested: string;
      currentValue: string;
      profitLoss: string;
      marketValue: string;
      totalDeduction: string;
      netCash: string;
      rawGold: string;
      workmanship: string;
      totalCost: string;
      enterData: string;
      enterDataSummary: string;
      change: string;
      deduction: string;
      work: string;
      note: string;
      noteText: string;
      dealerCut: string;
      cashback: string;
      optional: string;
      autoIfEmpty: string;
      priceUnavailable: string;
      loadingPrices: string;
      errorTitle: string;
      errorMessage: string;
      viewSimple: string;
      viewAdvanced: string;
      workmanshipCalculator: string;
      workmanshipShort: string;
      sellShort: string;
      profitShort: string;
      defaultTitle: string;
      defaultLead: string;
      simpleFormTitle: string;
      weightGramLabel: string;
      typeKaratLabel: string;
      workmanshipOptionalLabel: string;
      operationTypeLabel: string;
      iAmBuying: string;
      iAmSelling: string;
      estimatedBuyTotal: string;
      estimatedSellTotal: string;
      egyptianPound: string;
      pricePerGramLabel: string;
      metalValue: string;
      workmanshipTotalLabel: string;
      goldKarat24Label: string;
      goldKarat21Label: string;
      goldKarat18Label: string;
      silver999Label: string;
      silver925Label: string;
    };
    zakat: {
      title: string;
      subtitle: string;
    };
    currencies: {
      home: string;
      currencies: string;
      bankRates: string;
      calculator: string;
      indicators: string;
      title: string;
      subtitle: string;
      marketPulse: string;
      marketPulseSubtitle: string;
      quickConvert: string;
      quickConvertSubtitle: string;
      fullCalculator: string;
      top5Banks: string;
      top5BanksSubtitle: string;
      viewAll: string;
      tip: string;
      tipText: string;
      analytics: string;
      analyticsText: string;
      goToAnalytics: string;
      howToRead: string;
      buy: string;
      buyExplanation: string;
      sell: string;
      sellExplanation: string;
      spread: string;
      spreadExplanation: string;
      listedBanks: string;
      availableCurrencies: string;
      avgSpread: string;
      note: string;
      noteText: string;
      noteTextEn: string;
      liveUpdate: string;
      titleCalculator: string;
      subtitleCalculator: string;
      instantCompare: string;
      instantCompareText: string;
      highAccuracy: string;
      highAccuracyText: string;
      smartTips: string;
      smartTipsText: string;
      howItWorks: string;
      step1: string;
      step1Text: string;
      step2: string;
      step2Text: string;
      step3: string;
      step3Text: string;
      importantTips: string;
      smallAmounts: string;
      smallAmountsText: string;
      largeAmounts: string;
      largeAmountsText: string;
      creditCards: string;
      creditCardsText: string;
      alwaysVerify: string;
      alwaysVerifyText: string;
      compareBanks: string;
      compareBanksText: string;
      marketPulseLink: string;
      marketPulseLinkText: string;
      comingSoon: string;
      comingSoonText: string;
      charts: string;
      historicalAnalysis: string;
      statistics: string;
      backToCurrencies: string;
      parallelMarket: string;
      parallelMarketLabel: string;
      digitalDollar: string;
      digitalDollarLabel: string;
      officialAverage: string;
      officialAverageLabel: string;
      gapVsOfficial: string;
      gapVsOfficialLabel: string;
      change24h: string;
      change24hLabel: string;
      averageOfBanks: string;
      averageOfBanksLabel: string;
      bankLabel: string;
      highestBuy: string;
      lowestSell: string;
      hot: string;
      rank: string;
      bestPrice: string;
      cashOfficial: string;
      blackMarket: string;
      creditCard: string;
      officialDescription: string;
      parallelDescription: string;
      creditCardDescription: string;
      popular: string;
      official: string;
    };
    news: {
      title: string;
      subtitle: string;
      allCategories: string;
      gold: string;
      politics: string;
      silver: string;
      currencies: string;
      economy: string;
      crypto: string;
      searchPlaceholder: string;
      noResults: string;
      noResultsDescription: string;
      featuredNews: string;
      breakingNews: string;
      readMore: string;
      readingTime: string;
      minuteRead: string;
      minutesRead: string;
      publishedAt: string;
      source: string;
      shareArticle: string;
      copyLink: string;
      linkCopied: string;
      bookmark: string;
      bookmarked: string;
      removeBookmark: string;
      relatedNews: string;
      backToNews: string;
      mostFollowed: string;
      quickPrices: string;
      savedNews: string;
      savedNewsSubtitle: string;
      noSavedNews: string;
      noSavedNewsDescription: string;
      browseNews: string;
      savedAt: string;
      share: {
        twitter: string;
        facebook: string;
        whatsapp: string;
        telegram: string;
      };
      errorLoading: string;
    };
  };

  // 2026 Home Page Redesign
  home2026: {
    liveCairo: string;
    gold21Title: string;
    vsYesterday: string;
    lastUpdate: string;
    consumerSell: string;
    goldsmithBuy: string;
    move30Days: string;
    calculatePurchase: string;
    notifyPriceChange: string;
    allKaratsNow: string;
    details: string;
    bestBankRatePrefix: string;
    bestBankRateSuffix: string;
    highestBuyPrice: string;
    highestSellPrice: string;
    lowestSellPrice: string;
    parallelMarket: string;
    unofficial: string;
    egyptianPound: string;
    buy: string;
    sell: string;
    gapVsBanks: string;
    banksShowingPrice: string;
    silver: string;
    liveUpdate: string;
    createAlertFor: string;
    crypto: string;
    noData: string;
    toolGoldCalcName: string;
    toolGoldCalcDesc: string;
    toolZakatName: string;
    toolZakatDesc: string;
    toolCurrencyConverterName: string;
    toolCurrencyConverterDesc: string;
    toolGoldDetailedName: string;
    toolGoldDetailedDesc: string;
    economyNews: string;
    newsCenter: string;
    newsLoadError: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    header: {
      title: 'قدامك',
      subtitle: 'متابعة أسعار الذهب',
    },
    sidebar: {
      dashboard: 'لوحة التحكم',
      goldPrices: 'اسعار الذهب',
      goldCalculator: 'حاسبة الذهب',
      goldProducts: 'منتجات الذهب',
      currencyPrices: 'اسعار العملات',
      silverPrices: 'اسعار الفضة',
    },
    home: {
      goldPricesTitle: '💰 أسعار الذهب اليوم',
      goldPricesSubtitle: 'تابع أسعار الذهب لحظة بلحظة لجميع العيارات',
      currencyPricesTitle: '💱 أسعار العملات في مصر',
      currencyPricesSubtitle: 'أسعار الصرف مقابل الجنيه المصري',
      seeMore: 'شاهد المزيد',
      bestBankRates: 'أفضل أسعار البنوك',
      bestBankRatesSubtitle: 'أفضل البنوك للشراء والبيع',
      viewAllBankRates: 'شاهد أسعار كل البنوك',
    },
    gold: {
      sellPrice: 'سعر البيع',
      buyPrice: 'سعر الشراء',
      spread: 'الفرق',
      live: 'مباشر',
      karat24: 'عيار 24',
      karat21: 'عيار 21',
      karat18: 'عيار 18',
      pound: 'جنيه ذهب',
      ounce: 'أونصة عالمية ($)',
      tableTitle: 'أسعار الذهب حسب العيار',
      karatColumn: 'العيار',
      changeColumn: 'التغير',
      days30Column: '30 يوم',
      workmanshipTitle: 'المصنعية المتوقعة',
      estimatedChip: 'تقديري',
      globalIndicators: 'مؤشرات عالمية',
      goldOunceLabel: 'أونصة الذهب',
      silverOunceLabel: 'أونصة الفضة',
    },
    currency: {
      table: 'جدول',
      cards: 'بطاقات',
      errorLoading: 'حدث خطأ في تحميل أسعار العملات',
      lastUpdate: 'آخر تحديث',
      lastUpdatePrefix: 'آخر تحديث:',
      liveText: 'مباشر',
      notAvailable: 'غير متوفر',
      dollar: 'الدولار',
      euro: 'اليورو',
      currencyName: 'العملة',
      code: 'الرمز',
      price: 'السعر',
      change: 'التغير',
      trend: 'الاتجاه',
      usdName: 'دولار أمريكي',
      eurName: 'يورو',
      gbpName: 'جنيه إسترليني',
      sarName: 'ريال سعودي',
      aedName: 'درهم إماراتي',
      kwdName: 'دينار كويتي',
      egpName: 'الجنيه المصري',
      searchBank: 'ابحث عن بنك...',
      noSearchResults: 'لم يتم العثور على بنوك تطابق بحثك',
      best: 'الأفضل',
      highestBuyShort: 'أعلى شراء',
      lowestSellShort: 'أقل بيع',
      buy: 'شراء',
      sell: 'بيع',
      gap: 'الفارق',
      from: 'من',
      to: 'إلى',
      exchangeMethods: 'طرق الصرف المختلفة',
      updating: 'جاري التحديث...',
      highestBuyPrice: 'أعلى سعر تبيع بيه',
      highestSellPrice: 'أعلى سعر تشتري بيه',
      lowestBuyPrice: 'أقل سعر تبيع بيه',
      lowestSellPrice: 'أقل سعر تشتري بيه',
      unofficialChip: 'غير رسمي',
      gapVsBanks: 'الفارق عن البنوك',
      converterTitle: 'محول العملات',
      amountLabel: 'المبلغ',
      sourceLabel: 'المصدر',
      bankSource: 'بنكي',
      parallelSource: 'موازي',
      estimatedResult: 'الناتج التقديري',
      banksTitle: 'البنوك',
      bankColumn: 'البنك',
      bankNameColumn: 'اسم البنك',
      todayColumn: 'اليوم',
      loadingRates: 'جاري تحميل الأسعار...',
      noDataAvailable: 'لا توجد بيانات متاحة',
      unpinAria: 'إلغاء التثبيت',
      pinAria: 'تثبيت',
    },
    insights: {
      title: '📈 إحصائيات اليوم',
      highestGoldPrice: 'أعلى سعر ذهب',
      lowestGoldPrice: 'أدنى سعر ذهب',
      averageChange: 'متوسط التغير',
      highestCurrency: 'أعلى عملة',
      lowestCurrency: 'أدنى عملة',
      overallTrend: 'الاتجاه العام',
      karat24Label: '(عيار 24)',
      allKarats: '(جميع العيارات)',
      markets: 'للأسواق',
      rising: 'صاعد',
      falling: 'هابط',
      stable: 'مستقر',
    },
    activity: {
      title: '🔔 آخر التحديثات',
      viewAll: 'عرض الكل',
      changedTo: 'تغير إلى',
      noRecentUpdates: 'لا توجد تحديثات حديثة',
    },
    common: {
      egp: 'ج.م',
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      appName: 'قدامك',
      errorPasswordMismatch: 'كلمات المرور غير متطابقة',
      errorPasswordLength: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
      show: 'إظهار',
      hide: 'إخفاء',
      securityCheckError: 'يرجى إكمال التحقق الأمني',
    },
    charts: {
      chartTitle: 'الرسم البياني',
      defaultGoldChartTitle: 'تاريخ أسعار الذهب - جميع العيارات',
      period24h: '24 ساعة',
      period7d: '7 أيام',
      period30d: '30 يوم',
      period1y: 'سنة',
      periodAll: 'الكل',
      usdExchangeRate: 'سعر صرف الدولار',
      usdSellRate: 'سعر بيع الدولار',
      usdBuyRate: 'سعر شراء الدولار',
      loadingData: 'جاري تحميل البيانات...',
      errorLoadingTitle: 'خطأ في تحميل البيانات',
      errorLoadingChartMessage: 'فشل في تحميل بيانات الرسم البياني',
    },
    pages: {
      login: {
        appTitle: 'قدامك',
        appSubtitle: 'تتبع أسعار الذهب والعملات في الوقت الحقيقي',
        title: 'تسجيل الدخول',
        subtitle: 'سجّل الدخول لمتابعة محفظتك وتنبيهات الأسعار وحساباتك المحفوظة',
        emailLabel: 'البريد الإلكتروني',
        passwordLabel: 'كلمة المرور',
        forgotPassword: 'نسيت كلمة المرور؟',
        submitButton: 'تسجيل الدخول',
        submitting: 'جاري تسجيل الدخول...',
        or: 'أو',
        socialDivider: 'أو الدخول بالبريد الإلكتروني',
        demoLogin: 'تسجيل دخول تجريبي',
        noAccount: 'ليس لديك حساب؟',
        createAccount: 'إنشاء حساب جديد',
        termsText: 'بتسجيل الدخول، فإنك توافق على',
        termsLink: 'الشروط والأحكام',
        and: 'و',
        privacyLink: 'سياسة الخصوصية',
        footerText: 'التطبيق يوفر لك أحدث أسعار الذهب والعملات مع إمكانيات متقدمة للمتابعة',
        errorDefault: 'حدث خطأ أثناء تسجيل الدخول',
        rememberMe: 'إبقني مسجلاً للدخول',
        invalidEmail: 'أدخل بريدًا إلكترونيًا صحيحًا',
      },
      register: {
        appTitle: 'قدامك',
        appSubtitle: 'انضم لمتابعة أسعار الذهب والعملات',
        title: 'إنشاء حساب جديد',
        subtitle: 'سجّل ما تملكه واحصل على تنبيهات الأسعار واحتفظ بحساباتك المحفوظة',
        firstNameLabel: 'الاسم الأول',
        firstNamePlaceholder: 'أدخل اسمك الأول',
        lastNameLabel: 'اسم العائلة',
        lastNamePlaceholder: 'أدخل اسم العائلة',
        emailLabel: 'البريد الإلكتروني',
        phoneLabel: 'رقم الهاتف',
        passwordLabel: 'كلمة المرور',
        passwordPlaceholder: '6 أحرف على الأقل',
        passwordHint: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',
        confirmPasswordLabel: 'تأكيد كلمة المرور',
        confirmPasswordPlaceholder: 'أعد إدخال كلمة المرور',
        submitButton: 'إنشاء حساب',
        submitting: 'جاري إنشاء الحساب...',
        or: 'أو',
        socialDivider: 'أو التسجيل بالبريد الإلكتروني',
        demoRegister: 'إنشاء حساب تجريبي',
        hasAccount: 'لديك حساب بالفعل؟',
        loginLink: 'تسجيل الدخول',
        termsText: 'بإنشاء حساب، فإنك توافق على',
        termsLink: 'الشروط والأحكام',
        and: 'و',
        privacyLink: 'سياسة الخصوصية',
        benefitsTitle: 'بإنشاء حساب، ستحصل على:',
        benefit1: 'متابعة أسعار الذهب والعملات المفضلة',
        benefit2: 'تنبيهات عند تغير الأسعار',
        benefit3: 'حفظ التفضيلات والإعدادات',
        benefit4: 'الوصول إلى المحفوظات والمقارنات',
        footerText: 'استمتع بمتابعة أسعار الذهب والعملات مع تحديثات فورية وميزات متقدمة',
        successMessage: 'تم إنشاء حسابك بنجاح! يتم توجيهك إلى الصفحة الرئيسية...',
        errorPasswordMismatch: 'كلمات المرور غير متطابقة',
        errorPasswordLength: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        errorDefault: 'حدث خطأ أثناء إنشاء الحساب',
        sendAlerts: 'أرسل لي تنبيهات الأسعار بالبريد الإلكتروني',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح',
        phoneValid: 'رقم الهاتف صحيح',
      },
      forgotPassword: {
        title: 'استعادة كلمة المرور',
        subtitle: 'أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين كلمة المرور',
        emailLabel: 'البريد الإلكتروني',
        emailHint: 'سنرسل رابط إعادة تعيين كلمة المرور إلى هذا البريد الإلكتروني',
        submitButton: 'إرسال رابط إعادة التعيين',
        submitting: 'جاري الإرسال...',
        backToLogin: 'العودة لتسجيل الدخول',
        successMessage: 'تحقق من بريدك الإلكتروني للحصول على رمز التحقق',
        successTitle: 'تم الإرسال بنجاح!',
        successDescription: 'تحقق من بريدك الإلكتروني للحصول على رابط إعادة تعيين كلمة المرور',
        successEmailSent: 'تم إرسال رابط إعادة تعيين كلمة المرور إلى:',
        successOpenEmail: 'افتح بريدك الإلكتروني واضغط على الرابط لإعادة تعيين كلمة المرور',
        successCheckSpam: 'إذا لم تستلم الرسالة، تحقق من مجلد البريد المزعج',
        rememberedPassword: 'تذكرت كلمة المرور؟',
        loginLink: 'تسجيل الدخول',
        checkSpamFooter: 'إذا لم تستلم الرسالة، تحقق من مجلد البريد المزعج',
        goToVerify: 'إدخال رمز التحقق',
        errorDefault: 'حدث خطأ أثناء الإرسال',
      },
      resetPassword: {
        title: 'كلمة مرور جديدة',
        subtitle: 'اختر كلمة مرور قوية لحماية حسابك',
        newPasswordLabel: 'كلمة المرور الجديدة',
        newPasswordPlaceholder: '6 أحرف على الأقل',
        confirmPasswordLabel: 'تأكيد كلمة المرور',
        confirmPasswordPlaceholder: 'أعد إدخال كلمة المرور',
        passwordHint: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        submitButton: 'تعيين كلمة المرور',
        submitting: 'جاري التعيين...',
        backToLogin: 'العودة لتسجيل الدخول',
        successTitle: 'تم تعيين كلمة المرور بنجاح!',
        successRedirect: 'جاري التوجيه لتسجيل الدخول...',
        invalidLinkTitle: 'رابط غير صالح',
        invalidLinkDescription: 'رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية',
        requestNewLink: 'طلب رابط جديد',
        errorPasswordMismatch: 'كلمات المرور غير متطابقة',
        errorPasswordLength: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        errorInvalidLink: 'رابط إعادة التعيين غير صالح. يرجى طلب رابط جديد.',
        errorDefault: 'حدث خطأ أثناء تعيين كلمة المرور',
        loading: 'جاري التحميل...',
      },
      verifyOtp: {
        title: 'التحقق من الرمز',
        subtitle: 'أدخل رمز التحقق المرسل إلى',
        subtitlePhone: 'أدخل رمز التحقق المرسل إلى رقم الهاتف',
        resendButton: 'إعادة إرسال الرمز',
        resendIn: 'إعادة الإرسال بعد',
        seconds: 'ثانية',
        skipButton: 'تخطي التحقق',
        skipWarning: 'تخطي التحقق قد يحد من بعض الميزات',
        noCode: 'لم تستلم الرمز؟',
        successTitle: 'تم التحقق بنجاح!',
        successRedirect: 'جاري توجيهك...',
        backToLogin: 'العودة لتسجيل الدخول',
        errorDefault: 'رمز التحقق غير صحيح',
        newPasswordTitle: 'كلمة مرور جديدة',
        newPasswordLabel: 'كلمة المرور الجديدة',
        confirmPasswordLabel: 'تأكيد كلمة المرور',
        resetPasswordButton: 'تعيين كلمة المرور',
        resetSuccess: 'تم تعيين كلمة المرور بنجاح!',
      },
      social: {
        google: 'جوجل',
        apple: 'آبل',
        facebook: 'فيسبوك',
      },
      passwordStrength: {
        empty: 'أدخل كلمة مرور',
        weak: 'ضعيفة',
        fair: 'متوسطة',
        strong: 'قوية',
      },
      authAside: {
        loginTitle: 'ذهبك، متتبَّع في مكان واحد.',
        loginSubtitle: 'أسعار محلية وعالمية مباشرة، محفظة تقيّم نفسها، وتنبيهات تصلك لحظة وصول أي عيار لهدفك.',
        registerTitle: 'ابدأ التتبع في أقل من دقيقة.',
        registerSubtitle: 'سجّل ما تملكه مرة واحدة ونحن نقيّمه من بيانات السوق المباشرة — بدون جداول بيانات أو أسعار يدوية.',
        livePrices: 'أسعار مباشرة',
        referencePrices: 'أسعار مرجعية اليوم',
        benefitPortfolioTitle: 'محفظة تقيّم نفسها',
        benefitPortfolioDesc: 'ذهب وفضة وعملات وعملات رقمية، بأسعار من بيانات السوق المخزنة.',
        benefitAlertsTitle: 'تنبيهات الأسعار',
        benefitAlertsDesc: 'أخبرنا بهدفك ونرسل لك رسالة عند وصول أي عيار إليه.',
        benefitCalculatorsTitle: 'حاسبات ذكية',
        benefitCalculatorsDesc: 'مصنعية، إعادة بيع، تحويل عيار، ودمغة وزكاة.',
        benefitSyncTitle: 'محفوظة على كل أجهزتك',
        benefitSyncDesc: 'أصولك وتنبيهاتك تتبعك على الويب وتطبيق الموبايل.',
      },
      settings: {
        title: 'الإعدادات',
        subtitle: 'إدارة حسابك وتفضيلاتك',
        tabs: {
          account: 'الحساب',
          phone: 'هاتفك المحمول',
          security: 'الأمان',
          notifications: 'الإشعارات',
        },
        profileSection: 'معلومات الحساب',
        profileDescription: 'بياناتك الشخصية',
        nameLabel: 'الاسم',
        emailLabel: 'البريد الإلكتروني',
        firstNameLabel: 'الاسم الأول',
        lastNameLabel: 'اسم العائلة',
        editProfileButton: 'تعديل',
        saveButton: 'حفظ',
        savingButton: 'جاري الحفظ...',
        profileUpdated: 'تم تحديث بياناتك بنجاح',
        errorUpdateProfile: 'فشل تحديث البيانات',
        deleteButton: 'حذف',
        changeEmailSection: 'تغيير البريد الإلكتروني',
        changeEmailDescription: 'سيتم إرسال رمز تحقق للبريد الجديد',
        changeEmailButton: 'تغيير البريد الإلكتروني',
        newEmailLabel: 'البريد الإلكتروني الجديد',
        changingEmail: 'جاري التغيير...',
        emailOtpSent: 'تم إرسال رمز التحقق للبريد الجديد',
        newEmailTaken: 'هذا البريد الإلكتروني مستخدم بالفعل',
        newEmailSameAsCurrent: 'هذا هو بريدك الإلكتروني الحالي بالفعل',
        emailOtpTitle: 'التحقق من البريد الإلكتروني',
        emailOtpSubtitle: 'أدخل رمز التحقق المرسل إلى',
        emailChangeSuccess: 'تم تغيير البريد الإلكتروني بنجاح',
        changePasswordSection: 'تغيير كلمة المرور',
        changePasswordDescription: 'اختر كلمة مرور قوية لحماية حسابك',
        changePasswordButton: 'تغيير كلمة المرور',
        currentPassword: 'كلمة المرور الحالية',
        newPassword: 'كلمة المرور الجديدة',
        confirmPassword: 'تأكيد كلمة المرور',
        confirmPasswordLabel: 'تأكيد كلمة المرور الجديدة',
        passwordHint: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        changingPassword: 'جاري التغيير...',
        passwordChanged: 'تم تغيير كلمة المرور بنجاح',
        cancel: 'إلغاء',
        signOut: 'تسجيل الخروج',
        savedLabel: 'تم الحفظ',
        unsavedChanges: 'تغييرات غير محفوظة',
        showPasswords: 'إظهار كلمات المرور',
        hidePasswords: 'إخفاء كلمات المرور',
        passwordRuleLength: '6 أحرف على الأقل',
        passwordRuleNumber: 'تحتوي على رقم',
        passwordRuleMatch: 'كلمة المرور الجديدة مطابقة للتأكيد',
        connectedAccounts: {
          title: 'حسابات مربوطة',
          hint: 'استخدمها لتسجيل دخول أسرع',
          connect: 'ربط',
          disconnect: 'إلغاء الربط',
          notConnected: 'غير مربوط',
        },
        sessions: {
          title: 'الجلسات النشطة',
          subtitle: 'سجّل خروج أي جهاز لا تتعرف عليه',
          thisDevice: 'هذا الجهاز',
        },
        topics: {
          title: 'ماذا تريد أن نخبرك به',
          subtitle: 'تنطبق هذه الإعدادات على كل قناة تفعّلها',
          priceAlerts: 'تنبيهات الأسعار',
          priceAlertsDesc: 'عند وصول عيار الذهب أو عملة إلى هدفك',
          dailySummary: 'ملخص يومي',
          dailySummaryDesc: 'رسالة واحدة كل مساء بأسعار الإغلاق',
          marketNews: 'أخبار السوق',
          marketNewsDesc: 'العناوين التي تحرّك أسعار الذهب',
          portfolioChanges: 'تغييرات المحفظة',
          portfolioChangesDesc: 'ملخص أسبوعي لقيمة أصولك وأرباحك',
        },
        notificationsSection: 'قنوات الإشعارات',
        notificationsDescription: 'اختر كيف تريد تلقي الإشعارات',
        comingSoonBadge: 'قريباً',
        comingSoonNotice: 'قنوات الإشعارات قيد التطوير حالياً وستتوفر قريباً.',
        emailNotifications: 'إشعارات البريد الإلكتروني',
        emailNotificationsDesc: 'تلقي تنبيهات الأسعار عبر البريد',
        smsNotifications: 'إشعارات الرسائل النصية',
        smsNotificationsDesc: 'تلقي تنبيهات عبر SMS',
        smsRequiresPhone: 'يرجى إضافة رقم هاتف مفعّل أولاً',
        whatsappNotifications: 'إشعارات واتساب',
        whatsappNotificationsDesc: 'تلقي تنبيهات عبر واتساب',
        whatsappRequiresPhone: 'يرجى إضافة رقم هاتف مفعّل أولاً',
        telegramNotifications: 'إشعارات تليجرام',
        telegramNotificationsDesc: 'تلقي تنبيهات عبر تليجرام',
        linkTelegram: 'ربط حساب تليجرام',
        linked: 'مربوط',
        unlink: 'إلغاء الربط',
        unlinkConfirm: 'هل تريد إلغاء ربط حساب تليجرام؟',
        telegramModalTitle: 'ربط حساب تليجرام',
        openTelegram: 'فتح تليجرام',
        copyLink: 'نسخ الرابط',
        linkCopied: 'تم نسخ الرابط!',
        waitingForLink: 'في انتظار الربط...',
        telegramLinkSuccess: 'تم ربط تليجرام بنجاح!',
        phone: {
          title: 'أرقام الهاتف',
          description: 'إدارة أرقام هاتفك المحمول',
          addButton: 'إضافة رقم',
          noPhones: 'لا توجد أرقام هاتف',
          noPhonesDescription: 'أضف رقم هاتف لتفعيل إشعارات SMS وواتساب',
          newPhoneLabel: 'رقم الهاتف الجديد',
          phonePlaceholder: 'أدخل رقم الهاتف',
          phoneIncomplete: 'رقم الهاتف غير مكتمل',
          phoneValid: 'رقم الهاتف صالح',
          addAndVerify: 'إضافة وإرسال رمز التحقق',
          sending: 'جاري الإرسال...',
          verify: 'تفعيل',
          setDefault: 'تعيين افتراضي',
          defaultBadge: 'افتراضي',
          verified: 'مفعّل',
          notVerified: 'غير مفعّل',
          deleteConfirm: 'هل تريد حذف هذا الرقم؟',
          errorLoad: 'فشل تحميل أرقام الهاتف',
          errorAdd: 'حدث خطأ أثناء إضافة رقم الهاتف',
          errorVerify: 'فشل إرسال رمز التحقق',
          errorDelete: 'فشل حذف الرقم',
          errorSetDefault: 'فشل تعيين الرقم الافتراضي',
          retry: 'إعادة المحاولة',
          errorLoadDescription: 'تحقق من اتصالك وحاول مرة أخرى. أرقامك المحفوظة بأمان.',
          otpTitle: 'التحقق من رقم الهاتف',
          otpSubtitle: 'أدخل رمز التحقق المرسل إلى',
          otpSuccess: 'تم التحقق بنجاح!',
          otpSuccessDesc: 'تم تفعيل رقم الهاتف بنجاح',
          otpNoCode: 'لم تستلم الرمز؟',
          otpError: 'رمز التحقق غير صحيح',
          otpResend: 'إعادة إرسال الرمز',
          otpResendIn: 'إعادة الإرسال بعد',
          otpSeconds: 'ثانية',
        },
      },
      currency: {
        title: 'البنوك و الموازي',
        subtitle: 'مقارنة أسعار البنوك والسوق الموازي',
      },
      portfolio: {
        title: 'محفظة الأصول',
        subtitle: 'مقتنياتك من الذهب والعملات',
        comingSoon: 'قريباً...',
        lastUpdated: 'آخر تحديث',
        hideNumbers: 'إخفاء الأرقام',
        showNumbers: 'إظهار الأرقام',
        totalWealth: 'إجمالي قيمة المحفظة',
        totalProfitLoss: 'إجمالي الربح/الخسارة',
        assetDistribution: 'توزيع المحفظة',
        all: 'الكل',
        gold: 'ذهب',
        silver: 'فضة',
        currencies: 'عملات',
        crypto: 'عملات رقمية',
        currentValue: 'القيمة الحالية',
        profitLoss: 'الربح / الخسارة',
        addAsset: 'إضافة أصل',
        recordBuy: 'تسجيل شراء',
        edit: 'تعديل',
        delete: 'حذف',
        type: 'النوع',
        amount: 'الكمية',
        buyPrice: 'سعر الشراء',
        pricePerUnit: 'السعر لكل وحدة',
        date: 'التاريخ',
        save: 'حفظ',
        cancel: 'إلغاء',
        noAssets: 'ابدأ بتسجيل أول أصل',
        noAssetsDescription: 'سجّل الذهب والفضة والعملات التي معك، وسنحسب قيمتها الحالية وأرباحها من أسعار السوق المخزنة — بدون إدخال أي أرقام يدويًا.',
        assetsSuffix: 'أصل',
        purchaseValue: 'قيمة الشراء',
        pricedAssets: 'أصول بسعر شراء مسجل',
        ofLabel: 'من',
        bestCategory: 'أفضل فئة أداءً',
        notAvailable: 'غير متاح',
        notRecorded: 'غير مسجل',
        distributionByValue: 'بالقيمة',
        distributionByCount: 'بالعدد',
        myAssets: 'أصولي',
        viewCards: 'كاردات',
        viewTable: 'جدول',
        emptyTitle: 'ابدأ بتسجيل أول أصل',
        emptyDescription: 'سجّل الذهب والفضة والعملات التي معك، وسنحسب قيمتها الحالية وأرباحها من أسعار السوق المخزنة — بدون إدخال أي أرقام يدويًا.',
        addAssetTitle: 'إضافة أصل جديد',
        addAssetSubtitle: 'سعر الشراء وتاريخه اختياريان',
        assetNameLabel: 'اسم الأصل',
        assetNamePlaceholderGold: 'مثلاً: سبيكة 10 جرام',
        assetNamePlaceholderCrypto: 'مثلاً: مدخرات بيتكوين',
        assetNamePlaceholderGeneric: 'اسم يوصف الأصل',
        amountLabelWeight: 'الكمية (جرام)',
        amountLabelCurrency: 'الكمية (وحدات العملة)',
        amountLabelCrypto: 'الكمية (وحدات العملة الرقمية)',
        karatLabel: 'العيار',
        purityLabel: 'النقاء',
        currencyLabel: 'العملة',
        coinLabel: 'العملة الرقمية',
        buyPriceOptionalLabel: 'سعر الشراء للوحدة (ج.م) · اختياري',
        buyPriceHint: 'اتركه فارغاً لو غير مسجل',
        purchaseDateLabel: 'تاريخ الشراء · اختياري',
        notesLabel: 'ملاحظات',
        notesPlaceholder: 'مثلاً: محفوظ في البيت',
        saveAsset: 'حفظ الأصل',
        deleteConfirmTitle: 'حذف هذا الأصل؟',
        deleteConfirmDescription: 'لن تتمكن من التراجع عن هذا الإجراء.',
        columnAsset: 'الأصل',
        columnAmount: 'الكمية',
        columnPrice: 'سعر الوحدة',
        columnCurrentValue: 'القيمة الحالية',
        columnPurchaseValue: 'قيمة الشراء',
        columnProfitLoss: 'الربح / الخسارة',
        infoNoteTitle: 'ملاحظة',
        infoNoteBody: 'القيم الحالية محسوبة بأسعار إعادة البيع المقدّرة (سعر شراء الجرام للمعادن، ومتوسط سعر شراء البنوك للعملات). الأصول من غير سعر شراء مسجل تظهر «غير مسجل»، والقيم التي لا يتوفر لها سعر سوق تظهر «غير متاح».',
        currentPriceLabel: 'سعر الوحدة الحالي',
      },
      watchlist: {
        title: 'المراقبة',
        subtitle: 'العناصر المثبتة للمتابعة',
        comingSoon: 'قريباً...',
      },
      alerts: {
        title: 'التنبيهات',
        subtitle: 'مركز التنبيهات والإشعارات',
        comingSoon: 'قريباً...',
        noAlertsTitle: 'لا توجد تنبيهات',
        noAlertsDescription: 'أضف أول تنبيه لك لتتلقى إشعارات عندما تتغير الأسعار',
        addFirstAlert: 'إضافة أول تنبيه',
        addAlert: 'إضافة تنبيه',
        editAlert: 'تعديل التنبيه',
        deleteAlert: 'حذف التنبيه',
        targetPrice: 'السعر المستهدف',
        condition: 'الحالة',
        whenPriceDropsBelow: 'عندما ينخفض السعر عن',
        whenPriceRisesAbove: 'عندما يرتفع السعر فوق',
        below: 'تحت',
        above: 'فوق',
        active: 'نشط',
        triggered: 'تم التنبيه',
        enabled: 'مفعل',
        disabled: 'معطل',
        triggeredOn: 'تم التنبيه في',
        createdAt: 'تم الإنشاء في',
        product: 'المنتج',
        type: 'النوع',
        gold: 'ذهب',
        currency: 'عملة',
        selectProduct: 'اختر المنتج',
        selectType: 'اختر النوع',
        alertSaved: 'تم حفظ التنبيه',
        alertDeleted: 'تم حذف التنبيه',
        enableAlert: 'تفعيل التنبيه',
        disableAlert: 'تعطيل التنبيه',
        total: 'إجمالي',
      },
      analytics: {
        title: 'التحليلات',
        subtitle: 'تحليلات ورسوم بيانية للعملات',
        comingSoon: 'قريباً...',
      },
      gold: {
        title: '💰 أسعار الذهب',
        subtitle: 'تابع أسعار الذهب لحظة بلحظة لجميع العيارات',
      },
      karat: {
        invalidKarat: 'عيار غير صحيح',
        errorLoading: 'حدث خطأ في تحميل البيانات',
        currentPrice: 'السعر الحالي',
        buyPrice: 'سعر الشراء',
        sellPrice: 'سعر البيع',
        lastUpdate: 'آخر تحديث',
        high30d: 'أعلى سعر (30 يوم)',
        low30d: 'أقل سعر (30 يوم)',
        avg30d: 'متوسط السعر (30 يوم)',
        priceHistory: 'تاريخ الأسعار',
        purity: 'نقاء',
      },
      history: {
        title: 'سجل الأسعار',
        subtitle: 'تتبع جميع التغييرات في أسعار الذهب',
        errorLoading: 'حدث خطأ في تحميل البيانات',
      },
      chart: {
        title: 'الرسم البياني',
        subtitle: 'تتبع تغيرات أسعار الذهب عبر الزمن',
        errorLoading: 'حدث خطأ في تحميل البيانات',
      },
      calculator: {
        title: 'حاسبة الذهب',
        subtitle: 'احسب تكلفة الشراء، قيمة البيع، والأرباح',
        plCalculator: 'حساب المكسب/الخسارة',
        sellCalculator: 'حساب البيع',
        buyCalculator: 'حساب الشراء',
        item: 'قطعة',
        pricePerGram: 'سعر الجرام',
        weight: 'الوزن',
        weightGram: 'الوزن (جرام)',
        workmanshipPerGram: 'المصنعية/جم',
        workmanshipPerGramOptional: 'مصنعية الجرام (اختياري)',
        karat: 'العيار',
        addAnotherItem: '+ إضافة قطعة أخرى',
        summary: 'الملخص',
        totalInvested: 'إجمالي الاستثمار',
        currentValue: 'القيمة الحالية',
        profitLoss: 'الربح/الخسارة',
        marketValue: 'قيمة السوق',
        totalDeduction: 'إجمالي الخصم',
        netCash: 'صافي المبلغ',
        rawGold: 'سعر الذهب الخام',
        workmanship: 'المصنعية',
        totalCost: 'إجمالي التكلفة',
        enterData: 'أدخل البيانات',
        enterDataSummary: 'أدخل البيانات لرؤية الملخص',
        change: 'النسبة',
        deduction: 'الخصم',
        work: 'المصنعية',
        note: 'ملاحظة:',
        noteText: 'الأسعار تستخدم قيم تقريبية للتوضيح. للحصول على أسعار دقيقة يرجى التواصل مع التجار.',
        dealerCut: 'خصم التاجر',
        cashback: 'كاش باك',
        optional: 'اختياري',
        autoIfEmpty: 'تلقائي إذا تركت فارغاً',
        priceUnavailable: 'السعر غير متاح',
        loadingPrices: 'جاري تحميل أسعار الذهب...',
        errorTitle: 'خطأ في تحميل أسعار الذهب',
        errorMessage: 'فشل في تحميل أسعار الذهب من الخادم',
        viewSimple: 'بسيط',
        viewAdvanced: 'متقدم',
        workmanshipCalculator: 'حاسبة المصنعية',
        workmanshipShort: 'المصنعية',
        sellShort: 'البيع',
        profitShort: 'الأرباح',
        defaultTitle: 'حاسبة الذهب والفضة',
        defaultLead: 'أدخل الوزن والعيار والمصنعية للحصول على قيمة تقديرية مبنية على السعر المرجعي المعروض.',
        simpleFormTitle: 'بيانات الحساب',
        weightGramLabel: 'الوزن بالجرام',
        typeKaratLabel: 'النوع والعيار',
        workmanshipOptionalLabel: 'المصنعية للجرام (اختياري)',
        operationTypeLabel: 'نوع العملية',
        iAmBuying: 'أنا بشتري',
        iAmSelling: 'أنا ببيع',
        estimatedBuyTotal: 'إجمالي الشراء التقديري',
        estimatedSellTotal: 'إجمالي البيع التقديري',
        egyptianPound: 'جنيه مصري',
        pricePerGramLabel: 'سعر الجرام',
        metalValue: 'قيمة المعدن',
        workmanshipTotalLabel: 'إجمالي المصنعية',
        goldKarat24Label: 'ذهب عيار 24',
        goldKarat21Label: 'ذهب عيار 21',
        goldKarat18Label: 'ذهب عيار 18',
        silver999Label: 'فضة عيار 999',
        silver925Label: 'فضة عيار 925',
      },
      zakat: {
        title: 'حاسبة زكاة الذهب',
        subtitle: 'احسب زكاتك على الذهب وفقاً لأحكام الشريعة الإسلامية',
      },
      currencies: {
        home: 'الرئيسية',
        currencies: 'العملات',
        bankRates: 'أسعار البنوك',
        calculator: 'الحاسبة',
        indicators: 'المؤشرات',
        title: 'لوحة أسعار العملات',
        subtitle: 'لوحة لمتابعة أسعار العملات في مصر',
        marketPulse: 'نبض السوق',
        marketPulseSubtitle: 'متابعة لحظية لأهم أسعار العملات',
        quickConvert: 'تحويل سريع',
        quickConvertSubtitle: 'أداة سريعة لتحويل العملات',
        fullCalculator: 'حاسبة العملات',
        top5Banks: 'أفضل 5 بنوك',
        top5BanksSubtitle: 'أفضل الأسعار من أعلى 5 بنوك',
        viewAll: 'عرض الكل',
        tip: '💡 نصيحة',
        tipText: 'السوق الموازي يقدم أسعار أعلى ولكن مع مخاطر أكبر، بينما البنوك توفر أماناً وضماناً أكبر حتى لو كان السعر أقل.',
        analytics: '📊 التحليلات',
        analyticsText: 'للحصول على رؤى أعمق وتحليلات تاريخية، قم بزيارة صفحة التحليلات المتقدمة.',
        goToAnalytics: 'اذهب للتحليلات',
        howToRead: 'كيف تقرأ الجدول؟',
        buy: 'سعر الشراء:',
        buyExplanation: 'السعر الذي يشتري به البنك العملة منك (أعلى سعر = أفضل لك).',
        sell: 'سعر البيع:',
        sellExplanation: 'السعر الذي يبيع به البنك العملة لك (أقل سعر = أفضل لك).',
        spread: 'فارق السعر:',
        spreadExplanation: 'الفرق بين سعر البيع والشراء (كلما كان أقل كان أفضل).',
        listedBanks: 'البنوك المدرجة',
        availableCurrencies: 'العملات المتاحة',
        avgSpread: 'متوسط الفارق',
        note: '📌 ملاحظة:',
        noteText: 'الأسعار المعروضة هي أسعار استرشادية وقد تختلف من فرع لآخر. يُنصح بالتواصل مع البنك مباشرة لتأكيد السعر قبل إجراء أي معاملة.',
        noteTextEn: 'Rates shown are indicative and may vary between branches. Contact the bank directly to confirm rates before any transaction.',
        liveUpdate: 'تحديث لحظي',
        titleCalculator: 'حاسبة العملات الذكية',
        subtitleCalculator: 'أداة متقدمة لمقارنة جميع سيناريوهات التحويل',
        instantCompare: 'مقارنة فورية',
        instantCompareText: 'قارن بين السوق الرسمي والموازي والبطاقات الائتمانية في لحظة واحدة.',
        highAccuracy: 'دقة عالية',
        highAccuracyText: 'أسعار محدثة بناءً على متوسط أسعار البنوك الكبرى والسوق.',
        smartTips: 'نصائح ذكية',
        smartTipsText: 'احصل على توصيات حول أفضل طريقة للتحويل حسب المبلغ.',
        howItWorks: 'كيف تعمل الحاسبة؟',
        step1: 'أدخل المبلغ',
        step1Text: 'اختر العملة التي تريد تحويلها وأدخل المبلغ، ويمكنك التبديل بين اتجاهات التحويل بضغطة زر.',
        step2: 'شاهد السيناريوهات',
        step2Text: 'ستظهر لك ثلاثة سيناريوهات: الصرف الرسمي، السوق الموازي، والبطاقات الائتمانية.',
        step3: 'اختر الأفضل',
        step3Text: 'قارن النتائج واختر الطريقة الأنسب لك بناءً على السعر والأمان والراحة.',
        importantTips: 'نصائح مهمة',
        smallAmounts: 'للمبالغ الصغيرة',
        smallAmountsText: 'البنوك قد تكون أفضل لسهولة الوصول والأمان، حتى لو كان السعر أقل قليلاً.',
        largeAmounts: 'للمبالغ الكبيرة',
        largeAmountsText: 'فارق السعر بين الرسمي والموازي يصبح ملحوظاً جداً وقد يستحق المخاطرة المحسوبة.',
        creditCards: 'البطاقات الائتمانية',
        creditCardsText: 'مناسبة للمشتريات الدولية، لكن انتبه للرسوم الإضافية التي قد تصل إلى 10%.',
        alwaysVerify: 'تحقق دائماً',
        alwaysVerifyText: 'الأسعار تتغير باستمرار، تأكد من السعر النهائي قبل إتمام أي صفقة.',
        compareBanks: 'مقارنة البنوك',
        compareBanksText: 'قارن أسعار جميع البنوك.',
        marketPulseLink: 'نبض السوق',
        marketPulseLinkText: 'الأسعار الحية للسوق.',
        comingSoon: 'قريباً...',
        comingSoonText: 'نعمل حالياً على تطوير صفحة المؤشرات والرسوم البيانية لتحليل حركة العملات بشكل تفاعلي.',
        charts: 'رسوم بيانية',
        historicalAnalysis: 'تحليل تاريخي',
        statistics: 'إحصائيات',
        backToCurrencies: 'العودة إلى لوحة العملات',
        parallelMarket: 'السوق الموازي',
        parallelMarketLabel: 'السوق الموازي',
        digitalDollar: 'دولار رقمي (USDT)',
        digitalDollarLabel: 'دولار رقمي',
        officialAverage: 'متوسط البنوك',
        officialAverageLabel: 'المتوسط الرسمي',
        gapVsOfficial: 'الفارق عن الرسمي',
        gapVsOfficialLabel: 'الفارق عن الرسمي',
        change24h: 'التغير 24 ساعة',
        change24hLabel: 'التغير خلال 24 ساعة',
        averageOfBanks: 'متوسط أسعار',
        averageOfBanksLabel: 'متوسط أسعار البنوك الكبرى',
        bankLabel: 'البنك',
        highestBuy: 'أعلى سعر شراء',
        lowestSell: 'أقل سعر بيع',
        hot: 'شائع',
        rank: 'الترتيب',
        bestPrice: 'أفضل سعر',
        cashOfficial: 'سعر البنك',
        blackMarket: 'السوق الموازي',
        creditCard: 'بطاقة ائتمان',
        officialDescription: 'سعر البيع الرسمي للبنوك',
        parallelDescription: 'سعر البيع في السوق الموازي',
        creditCardDescription: 'سعر البنك + 10٪ رسوم',
        popular: 'شائع',
        official: 'رسمي',
      },
      news: {
        title: 'الأخبار',
        subtitle: 'آخر أخبار الذهب والعملات والأسواق',
        allCategories: 'الكل',
        gold: 'ذهب',
        politics: 'سياسة',
        silver: 'فضة',
        currencies: 'عملات',
        economy: 'اقتصاد',
        crypto: 'عملات رقمية',
        searchPlaceholder: 'ابحث في الأخبار...',
        noResults: 'لا توجد نتائج',
        noResultsDescription: 'لم نجد أخبار تطابق بحثك، جرب كلمات مختلفة',
        featuredNews: 'أخبار مميزة',
        breakingNews: 'عاجل',
        readMore: 'اقرأ المزيد',
        readingTime: 'وقت القراءة',
        minuteRead: 'دقيقة للقراءة',
        minutesRead: 'دقائق للقراءة',
        publishedAt: 'نُشر',
        source: 'المصدر',
        shareArticle: 'شارك المقال',
        copyLink: 'نسخ الرابط',
        linkCopied: 'تم نسخ الرابط!',
        bookmark: 'حفظ',
        bookmarked: 'محفوظ',
        removeBookmark: 'إزالة من المحفوظات',
        relatedNews: 'أخبار ذات صلة',
        backToNews: 'العودة للأخبار',
        mostFollowed: 'الأكثر متابعة',
        quickPrices: 'أسعار سريعة',
        savedNews: 'الأخبار المحفوظة',
        savedNewsSubtitle: 'الأخبار التي حفظتها للقراءة لاحقاً',
        noSavedNews: 'لا توجد أخبار محفوظة',
        noSavedNewsDescription: 'احفظ الأخبار التي تهمك لقراءتها لاحقاً',
        browseNews: 'تصفح الأخبار',
        savedAt: 'تم الحفظ',
        share: {
          twitter: 'تويتر',
          facebook: 'فيسبوك',
          whatsapp: 'واتساب',
          telegram: 'تيليجرام',
        },
        errorLoading: 'حدث خطأ في تحميل الأخبار',
      },
    },

    home2026: {
      liveCairo: 'مباشر — القاهرة',
      gold21Title: 'جرام الذهب عيار 21',
      vsYesterday: 'عن أمس',
      lastUpdate: 'آخر تحديث',
      consumerSell: 'تشتري من الصائغ',
      goldsmithBuy: 'تبيع للصائغ',
      move30Days: 'حركة 30 يوم',
      calculatePurchase: 'احسب قيمة مشترياتي',
      notifyPriceChange: 'نبّهني عند تغير السعر',
      allKaratsNow: 'كل الأعيرة الآن',
      details: 'التفاصيل ←',
      bestBankRatePrefix: 'أفضل سعر',
      bestBankRateSuffix: 'في البنوك',
      highestBuyPrice: 'أعلى سعر تبيع بيه',
      highestSellPrice: 'أعلى سعر تشتري بيه',
      lowestSellPrice: 'أقل سعر تشتري بيه',
      parallelMarket: 'السوق الموازي',
      unofficial: 'غير رسمي',
      egyptianPound: 'جنيه مصري',
      buy: 'سعر تبيع بيه',
      sell: 'سعر تشتري بيه',
      gapVsBanks: 'الفارق عن البنوك',
      banksShowingPrice: 'بنكاً يعرض هذا السعر',
      silver: 'الفضة',
      liveUpdate: 'تحديث لحظي',
      createAlertFor: 'إنشاء تنبيه لـ',
      crypto: 'العملات الرقمية',
      noData: 'لا توجد بيانات',
      toolGoldCalcName: 'حاسبة الذهب والفضة',
      toolGoldCalcDesc: 'احسب قيمة مشترياتك بدقة',
      toolZakatName: 'حاسبة الزكاة',
      toolZakatDesc: 'زكاة الذهب والفضة والنقود',
      toolCurrencyConverterName: 'محول العملات',
      toolCurrencyConverterDesc: 'تحويل فوري بين العملات',
      toolGoldDetailedName: 'أسعار الذهب التفصيلية',
      toolGoldDetailedDesc: 'كل الأعيرة والمؤشرات',
      economyNews: 'أخبار الاقتصاد',
      newsCenter: 'مركز الأخبار ←',
      newsLoadError: 'فشل في تحميل الأخبار',
    },
  },
  en: {
    header: {
      title: 'Odamak',
      subtitle: 'Gold Price Tracker',
    },
    sidebar: {
      dashboard: 'Dashboard',
      goldPrices: 'Gold Prices',
      goldCalculator: 'Gold Calculator',
      goldProducts: 'Gold Products',
      currencyPrices: 'Currency Prices',
      silverPrices: 'Silver Prices',
    },
    home: {
      goldPricesTitle: '💰 Today\'s Gold Prices',
      goldPricesSubtitle: 'Track gold prices in real-time for all karats',
      currencyPricesTitle: '💱 Currency Prices in Egypt',
      currencyPricesSubtitle: 'Exchange rates against the Egyptian Pound',
      seeMore: 'See More',
      bestBankRates: 'Best Bank Rates',
      bestBankRatesSubtitle: 'Best banks for buying and selling',
      viewAllBankRates: 'View All Bank Rates',
    },
    gold: {
      sellPrice: 'Sell Price',
      buyPrice: 'Buy Price',
      spread: 'Spread',
      live: 'Live',
      karat24: '24 Karat',
      karat21: '21 Karat',
      karat18: '18 Karat',
      pound: 'Gold Pound',
      ounce: 'Global Ounce ($)',
      tableTitle: 'Gold Prices by Karat',
      karatColumn: 'Karat',
      changeColumn: 'Change',
      days30Column: '30 Days',
      workmanshipTitle: 'Estimated Workmanship',
      estimatedChip: 'Estimated',
      globalIndicators: 'Global Indicators',
      goldOunceLabel: 'Gold Ounce',
      silverOunceLabel: 'Silver Ounce',
    },
    currency: {
      table: 'Table',
      cards: 'Cards',
      errorLoading: 'Error loading currency prices',
      lastUpdate: 'Last Update',
      lastUpdatePrefix: 'Last update:',
      liveText: 'Live',
      notAvailable: 'N/A',
      dollar: 'Dollar',
      euro: 'Euro',
      currencyName: 'Currency',
      code: 'Code',
      price: 'Price',
      change: 'Change',
      trend: 'Trend',
      usdName: 'US Dollar',
      eurName: 'Euro',
      gbpName: 'British Pound',
      sarName: 'Saudi Riyal',
      aedName: 'UAE Dirham',
      kwdName: 'Kuwaiti Dinar',
      egpName: 'Egyptian Pound',
      searchBank: 'Search for a bank...',
      noSearchResults: 'No banks match your search',
      best: 'Best',
      highestBuyShort: 'Highest Buy',
      lowestSellShort: 'Lowest Sell',
      buy: 'Buy',
      sell: 'Sell',
      gap: 'Spread',
      from: 'From',
      to: 'To',
      exchangeMethods: 'Exchange Methods',
      updating: 'Updating...',
      highestBuyPrice: 'Highest Price You Can Sell At',
      highestSellPrice: 'Highest Price You Can Buy At',
      lowestBuyPrice: 'Lowest Price You Can Sell At',
      lowestSellPrice: 'Lowest Price You Can Buy At',
      unofficialChip: 'Unofficial',
      gapVsBanks: 'Gap vs Banks',
      converterTitle: 'Currency Converter',
      amountLabel: 'Amount',
      sourceLabel: 'Source',
      bankSource: 'Bank',
      parallelSource: 'Parallel',
      estimatedResult: 'Estimated Result',
      banksTitle: 'Banks',
      bankColumn: 'Bank',
      bankNameColumn: 'Bank Name',
      todayColumn: 'Today',
      loadingRates: 'Loading rates...',
      noDataAvailable: 'No data available',
      unpinAria: 'Unpin',
      pinAria: 'Pin',
    },
    insights: {
      title: '📈 Today\'s Statistics',
      highestGoldPrice: 'Highest Gold Price',
      lowestGoldPrice: 'Lowest Gold Price',
      averageChange: 'Average Change',
      highestCurrency: 'Highest Currency',
      lowestCurrency: 'Lowest Currency',
      overallTrend: 'Overall Trend',
      karat24Label: '(24 Karat)',
      allKarats: '(All Karats)',
      markets: 'for Markets',
      rising: 'Rising',
      falling: 'Falling',
      stable: 'Stable',
    },
    activity: {
      title: '🔔 Recent Updates',
      viewAll: 'View All',
      changedTo: 'changed to',
      noRecentUpdates: 'No recent updates',
    },
    common: {
      egp: 'EGP',
      loading: 'Loading...',
      error: 'Error occurred',
      appName: 'Odamak',
      errorPasswordMismatch: 'Passwords do not match',
      errorPasswordLength: 'Password must be at least 6 characters',
      show: 'Show',
      hide: 'Hide',
      securityCheckError: 'Please complete the security check',
    },
    charts: {
      chartTitle: 'Chart',
      defaultGoldChartTitle: 'Gold Price History - All Karats',
      period24h: '24 Hours',
      period7d: '7 Days',
      period30d: '30 Days',
      period1y: 'Year',
      periodAll: 'All',
      usdExchangeRate: 'USD Exchange Rate',
      usdSellRate: 'USD Sell Rate',
      usdBuyRate: 'USD Buy Rate',
      loadingData: 'Loading data...',
      errorLoadingTitle: 'Error loading data',
      errorLoadingChartMessage: 'Failed to load chart data',
    },
    pages: {
      login: {
        appTitle: 'Odamak',
        appSubtitle: 'Track gold and currency prices in real-time',
        title: 'Sign In',
        subtitle: 'Sign in to follow your portfolio, price alerts and saved calculations',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        forgotPassword: 'Forgot password?',
        submitButton: 'Sign In',
        submitting: 'Signing in...',
        or: 'or',
        socialDivider: 'or sign in with email',
        demoLogin: 'Demo Login',
        noAccount: "Don't have an account?",
        createAccount: 'Create New Account',
        termsText: 'By signing in, you agree to our',
        termsLink: 'Terms & Conditions',
        and: 'and',
        privacyLink: 'Privacy Policy',
        footerText: 'The app provides the latest gold and currency prices with advanced tracking features',
        errorDefault: 'An error occurred while signing in',
        rememberMe: 'Keep me signed in',
        invalidEmail: 'Enter a valid email address',
      },
      register: {
        appTitle: 'Odamak',
        appSubtitle: 'Join to track gold and currency prices',
        title: 'Create New Account',
        subtitle: 'Track what you own, get price alerts, and keep your calculations saved',
        firstNameLabel: 'First Name',
        firstNamePlaceholder: 'Enter your first name',
        lastNameLabel: 'Last Name',
        lastNamePlaceholder: 'Enter your last name',
        emailLabel: 'Email',
        phoneLabel: 'Phone Number',
        passwordLabel: 'Password',
        passwordPlaceholder: 'At least 6 characters',
        passwordHint: 'Password must be at least 6 characters',
        confirmPasswordLabel: 'Confirm Password',
        confirmPasswordPlaceholder: 'Re-enter your password',
        submitButton: 'Create Account',
        submitting: 'Creating account...',
        or: 'or',
        socialDivider: 'or sign up with email',
        demoRegister: 'Create Demo Account',
        hasAccount: 'Already have an account?',
        loginLink: 'Sign In',
        termsText: 'By creating an account, you agree to our',
        termsLink: 'Terms & Conditions',
        and: 'and',
        privacyLink: 'Privacy Policy',
        benefitsTitle: 'By creating an account, you get:',
        benefit1: 'Track your favorite gold and currency prices',
        benefit2: 'Price change alerts',
        benefit3: 'Save preferences and settings',
        benefit4: 'Access to saved items and comparisons',
        footerText: 'Enjoy tracking gold and currency prices with real-time updates and advanced features',
        successMessage: 'Account created successfully! Redirecting to home page...',
        errorPasswordMismatch: 'Passwords do not match',
        errorPasswordLength: 'Password must be at least 6 characters',
        errorDefault: 'An error occurred while creating the account',
        sendAlerts: 'Send me price alerts by email',
        phoneInvalid: 'Please enter a valid phone number',
        phoneValid: 'Phone number is valid',
      },
      forgotPassword: {
        title: 'Reset Password',
        subtitle: 'Enter your email and we will send you a link to reset your password',
        emailLabel: 'Email',
        emailHint: 'We will send a password reset link to this email',
        submitButton: 'Send Reset Link',
        submitting: 'Sending...',
        backToLogin: 'Back to Login',
        successMessage: 'Check your email for the verification code',
        successTitle: 'Sent Successfully!',
        successDescription: 'Check your email for the password reset link',
        successEmailSent: 'Password reset link has been sent to:',
        successOpenEmail: 'Open your email and click the link to reset your password',
        successCheckSpam: 'If you did not receive the email, check your spam folder',
        rememberedPassword: 'Remember your password?',
        loginLink: 'Sign In',
        checkSpamFooter: 'If you did not receive the email, check your spam folder',
        goToVerify: 'Enter verification code',
        errorDefault: 'An error occurred while sending',
      },
      resetPassword: {
        title: 'New Password',
        subtitle: 'Choose a strong password to protect your account',
        newPasswordLabel: 'New Password',
        newPasswordPlaceholder: 'At least 6 characters',
        confirmPasswordLabel: 'Confirm Password',
        confirmPasswordPlaceholder: 'Re-enter your password',
        passwordHint: 'Password must be at least 6 characters',
        submitButton: 'Set Password',
        submitting: 'Setting password...',
        backToLogin: 'Back to Login',
        successTitle: 'Password set successfully!',
        successRedirect: 'Redirecting to login...',
        invalidLinkTitle: 'Invalid Link',
        invalidLinkDescription: 'The password reset link is invalid or expired',
        requestNewLink: 'Request New Link',
        errorPasswordMismatch: 'Passwords do not match',
        errorPasswordLength: 'Password must be at least 6 characters',
        errorInvalidLink: 'Reset link is invalid. Please request a new link.',
        errorDefault: 'An error occurred while setting the password',
        loading: 'Loading...',
      },
      verifyOtp: {
        title: 'Verify Code',
        subtitle: 'Enter the verification code sent to',
        subtitlePhone: 'Enter the verification code sent to your phone number',
        resendButton: 'Resend Code',
        resendIn: 'Resend in',
        seconds: 'seconds',
        skipButton: 'Skip Verification',
        skipWarning: 'Skipping verification may limit some features',
        noCode: "Didn't receive the code?",
        successTitle: 'Verified Successfully!',
        successRedirect: 'Redirecting...',
        backToLogin: 'Back to Login',
        errorDefault: 'Invalid verification code',
        newPasswordTitle: 'New Password',
        newPasswordLabel: 'New Password',
        confirmPasswordLabel: 'Confirm Password',
        resetPasswordButton: 'Reset Password',
        resetSuccess: 'Password reset successfully!',
      },
      social: {
        google: 'Google',
        apple: 'Apple',
        facebook: 'Facebook',
      },
      passwordStrength: {
        empty: 'Enter a password',
        weak: 'Weak',
        fair: 'Fair',
        strong: 'Strong',
      },
      authAside: {
        loginTitle: 'Your gold, tracked in one place.',
        loginSubtitle: 'Live local and global prices, a portfolio that values itself, and alerts that reach you the moment a karat hits your target.',
        registerTitle: 'Start tracking in under a minute.',
        registerSubtitle: 'Add what you own once and we keep valuing it from live market data — no spreadsheets, no manual prices.',
        livePrices: 'Live prices',
        referencePrices: "Today's reference prices",
        benefitPortfolioTitle: 'Portfolio that values itself',
        benefitPortfolioDesc: 'Gold, silver, currencies and crypto priced from stored market data.',
        benefitAlertsTitle: 'Price alerts',
        benefitAlertsDesc: 'Tell us your target and we message you when a karat reaches it.',
        benefitCalculatorsTitle: 'Smart calculators',
        benefitCalculatorsDesc: 'Making charge, shop resale, karat conversion, stamp duty and zakat.',
        benefitSyncTitle: 'Saved across devices',
        benefitSyncDesc: 'Your assets and alerts follow you on web and the mobile app.',
      },
      settings: {
        title: 'Settings',
        subtitle: 'Manage your account and preferences',
        tabs: {
          account: 'Account',
          phone: 'Phone',
          security: 'Security',
          notifications: 'Notifications',
        },
        profileSection: 'Account Information',
        profileDescription: 'Your personal information',
        nameLabel: 'Name',
        emailLabel: 'Email',
        firstNameLabel: 'First Name',
        lastNameLabel: 'Last Name',
        editProfileButton: 'Edit',
        saveButton: 'Save',
        savingButton: 'Saving...',
        profileUpdated: 'Your profile was updated successfully',
        errorUpdateProfile: 'Failed to update profile',
        deleteButton: 'Delete',
        changeEmailSection: 'Change Email',
        changeEmailDescription: 'A verification code will be sent to the new email',
        changeEmailButton: 'Change Email',
        newEmailLabel: 'New Email',
        changingEmail: 'Changing...',
        emailOtpSent: 'Verification code sent to new email',
        newEmailTaken: 'This email is already in use',
        newEmailSameAsCurrent: 'This is already your current email',
        emailOtpTitle: 'Verify Your Email',
        emailOtpSubtitle: 'Enter the verification code sent to',
        emailChangeSuccess: 'Email changed successfully',
        changePasswordSection: 'Change Password',
        changePasswordDescription: 'Choose a strong password to protect your account',
        changePasswordButton: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        confirmPasswordLabel: 'Confirm New Password',
        passwordHint: 'Password must be at least 6 characters',
        changingPassword: 'Changing...',
        passwordChanged: 'Password changed successfully',
        cancel: 'Cancel',
        signOut: 'Sign out',
        savedLabel: 'Saved',
        unsavedChanges: 'Unsaved changes',
        showPasswords: 'Show passwords',
        hidePasswords: 'Hide passwords',
        passwordRuleLength: 'At least 6 characters',
        passwordRuleNumber: 'Contains a number',
        passwordRuleMatch: 'New password matches confirmation',
        connectedAccounts: {
          title: 'Connected accounts',
          hint: 'Use them to sign in faster',
          connect: 'Connect',
          disconnect: 'Disconnect',
          notConnected: 'Not connected',
        },
        sessions: {
          title: 'Active sessions',
          subtitle: "Sign out any device you don't recognise",
          thisDevice: 'This device',
        },
        topics: {
          title: 'What to notify me about',
          subtitle: 'These apply to every channel you enable',
          priceAlerts: 'Price alerts',
          priceAlertsDesc: 'When a gold karat or currency hits your target',
          dailySummary: 'Daily summary',
          dailySummaryDesc: 'One message each evening with closing prices',
          marketNews: 'Market news',
          marketNewsDesc: 'Headlines that move gold prices',
          portfolioChanges: 'Portfolio changes',
          portfolioChangesDesc: 'Weekly value and profit summary of your assets',
        },
        notificationsSection: 'Notification Channels',
        notificationsDescription: 'Choose how you want to receive notifications',
        comingSoonBadge: 'Coming soon',
        comingSoonNotice: 'Notification channels are still in development and will be available soon.',
        emailNotifications: 'Email Notifications',
        emailNotificationsDesc: 'Receive price alerts via email',
        smsNotifications: 'SMS Notifications',
        smsNotificationsDesc: 'Receive alerts via SMS',
        smsRequiresPhone: 'Please add a verified phone number first',
        whatsappNotifications: 'WhatsApp Notifications',
        whatsappNotificationsDesc: 'Receive alerts via WhatsApp',
        whatsappRequiresPhone: 'Please add a verified phone number first',
        telegramNotifications: 'Telegram Notifications',
        telegramNotificationsDesc: 'Receive alerts via Telegram',
        linkTelegram: 'Link Telegram Account',
        linked: 'Linked',
        unlink: 'Unlink',
        unlinkConfirm: 'Do you want to unlink your Telegram account?',
        telegramModalTitle: 'Link Telegram Account',
        openTelegram: 'Open Telegram',
        copyLink: 'Copy Link',
        linkCopied: 'Link copied!',
        waitingForLink: 'Waiting for link...',
        telegramLinkSuccess: 'Telegram linked successfully!',
        phone: {
          title: 'Phone Numbers',
          description: 'Manage your mobile phone numbers',
          addButton: 'Add Number',
          noPhones: 'No phone numbers',
          noPhonesDescription: 'Add a phone number to enable SMS and WhatsApp notifications',
          newPhoneLabel: 'New Phone Number',
          phonePlaceholder: 'Enter phone number',
          phoneIncomplete: 'Phone number is incomplete',
          phoneValid: 'Phone number is valid',
          addAndVerify: 'Add and Send Verification Code',
          sending: 'Sending...',
          verify: 'Verify',
          setDefault: 'Set Default',
          defaultBadge: 'Default',
          verified: 'Verified',
          notVerified: 'Not Verified',
          deleteConfirm: 'Do you want to delete this number?',
          errorLoad: 'Failed to load phone numbers',
          errorAdd: 'An error occurred while adding the phone number',
          errorVerify: 'Failed to send verification code',
          errorDelete: 'Failed to delete the number',
          errorSetDefault: 'Failed to set default number',
          retry: 'Retry',
          errorLoadDescription: 'Check your connection and try again. Your saved numbers are safe.',
          otpTitle: 'Verify Phone Number',
          otpSubtitle: 'Enter the verification code sent to',
          otpSuccess: 'Verified Successfully!',
          otpSuccessDesc: 'Phone number verified successfully',
          otpNoCode: "Didn't receive the code?",
          otpError: 'Invalid verification code',
          otpResend: 'Resend Code',
          otpResendIn: 'Resend in',
          otpSeconds: 'seconds',
        },
      },
      currency: {
        title: 'Banks & Parallel',
        subtitle: 'Compare official bank rates vs parallel market',
      },
      portfolio: {
        title: 'Asset Portfolio',
        subtitle: 'Your gold and currency holdings',
        comingSoon: 'Coming soon...',
        lastUpdated: 'Last updated',
        hideNumbers: 'Hide numbers',
        showNumbers: 'Show numbers',
        totalWealth: 'Total portfolio value',
        totalProfitLoss: 'Total Profit/Loss',
        assetDistribution: 'Portfolio distribution',
        all: 'All',
        gold: 'Gold',
        silver: 'Silver',
        currencies: 'Currencies',
        crypto: 'Crypto',
        currentValue: 'Current Value',
        profitLoss: 'Profit / Loss',
        addAsset: 'Add Asset',
        recordBuy: 'Record Buy',
        edit: 'Edit',
        delete: 'Delete',
        type: 'Type',
        amount: 'Amount',
        buyPrice: 'Buy Price',
        pricePerUnit: 'Price per Unit',
        date: 'Date',
        save: 'Save',
        cancel: 'Cancel',
        noAssets: 'Start by recording your first asset',
        noAssetsDescription: 'Record the gold, silver and currencies you own, and we will value them from stored market prices — no numbers to enter yourself.',
        assetsSuffix: 'assets',
        purchaseValue: 'Purchase value',
        pricedAssets: 'assets with a recorded buy price',
        ofLabel: 'of',
        bestCategory: 'Best performing category',
        notAvailable: 'Unavailable',
        notRecorded: 'Not recorded',
        distributionByValue: 'By value',
        distributionByCount: 'By count',
        myAssets: 'My assets',
        viewCards: 'Cards',
        viewTable: 'Table',
        emptyTitle: 'Start by recording your first asset',
        emptyDescription: 'Record the gold, silver and currencies you own, and we will value them from stored market prices — no numbers to enter yourself.',
        addAssetTitle: 'Add new asset',
        addAssetSubtitle: 'Buy price and date are optional',
        assetNameLabel: 'Asset name',
        assetNamePlaceholderGold: 'e.g. 10 gram gold bar',
        assetNamePlaceholderCrypto: 'e.g. Bitcoin savings',
        assetNamePlaceholderGeneric: 'A name describing the asset',
        amountLabelWeight: 'Amount (grams)',
        amountLabelCurrency: 'Amount (currency units)',
        amountLabelCrypto: 'Amount (coin units)',
        karatLabel: 'Karat',
        purityLabel: 'Purity',
        currencyLabel: 'Currency',
        coinLabel: 'Coin',
        buyPriceOptionalLabel: 'Buy price per unit (EGP) · optional',
        buyPriceHint: 'Leave blank if not recorded',
        purchaseDateLabel: 'Purchase date · optional',
        notesLabel: 'Notes',
        notesPlaceholder: 'e.g. Stored at home',
        saveAsset: 'Save asset',
        deleteConfirmTitle: 'Delete this asset?',
        deleteConfirmDescription: 'This action cannot be undone.',
        columnAsset: 'Asset',
        columnAmount: 'Amount',
        columnPrice: 'Unit price',
        columnCurrentValue: 'Current value',
        columnPurchaseValue: 'Purchase value',
        columnProfitLoss: 'Profit / Loss',
        infoNoteTitle: 'Note',
        infoNoteBody: 'Current values use estimated resale prices (gram buy price for metals, average official-bank buy rate for currencies). Assets without a recorded buy price show "Not recorded", and values with no market price show "Unavailable".',
        currentPriceLabel: 'Current unit price',
      },
      watchlist: {
        title: 'Watchlist',
        subtitle: 'Pinned items for tracking',
        comingSoon: 'Coming soon...',
      },
      alerts: {
        title: 'Alerts',
        subtitle: 'Notification center',
        comingSoon: 'Coming soon...',
        noAlertsTitle: 'No alerts yet',
        noAlertsDescription: 'Add your first price alert to get notified when prices change',
        addFirstAlert: 'Add First Alert',
        addAlert: 'Add Alert',
        editAlert: 'Edit Alert',
        deleteAlert: 'Delete Alert',
        targetPrice: 'Target Price',
        condition: 'Condition',
        whenPriceDropsBelow: 'When price drops below',
        whenPriceRisesAbove: 'When price rises above',
        below: 'Below',
        above: 'Above',
        active: 'Active',
        triggered: 'Triggered',
        enabled: 'Enabled',
        disabled: 'Disabled',
        triggeredOn: 'Triggered on',
        createdAt: 'Created at',
        product: 'Product',
        type: 'Type',
        gold: 'Gold',
        currency: 'Currency',
        selectProduct: 'Select Product',
        selectType: 'Select Type',
        alertSaved: 'Alert saved',
        alertDeleted: 'Alert deleted',
        enableAlert: 'Enable Alert',
        disableAlert: 'Disable Alert',
        total: 'Total',
      },
      analytics: {
        title: 'Analytics',
        subtitle: 'Currency analytics and charts',
        comingSoon: 'Coming soon...',
      },
      gold: {
        title: '💰 Gold Prices',
        subtitle: 'Track gold prices in real-time for all karats',
      },
      karat: {
        invalidKarat: 'Invalid karat',
        errorLoading: 'Error loading data',
        currentPrice: 'Current Price',
        buyPrice: 'Buy Price',
        sellPrice: 'Sell Price',
        lastUpdate: 'Last Update',
        high30d: 'High (30 days)',
        low30d: 'Low (30 days)',
        avg30d: 'Average (30 days)',
        priceHistory: 'Price History',
        purity: 'Purity',
      },
      history: {
        title: 'Price History',
        subtitle: 'Track all changes in gold prices',
        errorLoading: 'Error loading data',
      },
      chart: {
        title: 'Chart',
        subtitle: 'Track gold price changes over time',
        errorLoading: 'Error loading data',
      },
      calculator: {
        title: 'Gold Calculator',
        subtitle: 'Calculate buy cost, sell value, and profits',
        plCalculator: 'P&L Calculator',
        sellCalculator: 'Sell Calculator',
        buyCalculator: 'Buy Calculator',
        item: 'Item',
        pricePerGram: 'Price/g',
        weight: 'Weight',
        weightGram: 'Weight (g)',
        workmanshipPerGram: 'Work/g',
        workmanshipPerGramOptional: 'Workmanship/g (Optional)',
        karat: 'Karat',
        addAnotherItem: '+ Add Another Item',
        summary: 'Summary',
        totalInvested: 'Total Invested',
        currentValue: 'Current Value',
        profitLoss: 'Profit/Loss',
        marketValue: 'Market Value',
        totalDeduction: 'Total Deduction',
        netCash: 'Net Cash',
        rawGold: 'Raw Gold',
        workmanship: 'Workmanship',
        totalCost: 'Total Cost',
        enterData: 'Enter data',
        enterDataSummary: 'Enter data to see summary',
        change: 'Change',
        deduction: 'Deduction',
        work: 'Work',
        note: 'Note:',
        noteText: 'Prices use approximate values for illustration. For accurate pricing, contact local dealers.',
        dealerCut: 'Dealer Cut',
        cashback: 'Cashback',
        optional: 'Optional',
        autoIfEmpty: 'Auto if empty',
        priceUnavailable: 'Price unavailable',
        loadingPrices: 'Loading gold prices...',
        errorTitle: 'Error loading gold prices',
        errorMessage: 'Failed to load gold prices from the server',
        viewSimple: 'Simple',
        viewAdvanced: 'Advanced',
        workmanshipCalculator: 'Workmanship Calculator',
        workmanshipShort: 'Workmanship',
        sellShort: 'Sell',
        profitShort: 'Profit',
        defaultTitle: 'Gold & Silver Calculator',
        defaultLead: 'Enter the weight, karat, and workmanship to get an estimated value based on the reference price shown.',
        simpleFormTitle: 'Calculation Data',
        weightGramLabel: 'Weight in Grams',
        typeKaratLabel: 'Type & Karat',
        workmanshipOptionalLabel: 'Workmanship per Gram (optional)',
        operationTypeLabel: 'Operation Type',
        iAmBuying: 'I am buying',
        iAmSelling: 'I am selling',
        estimatedBuyTotal: 'Estimated Buy Total',
        estimatedSellTotal: 'Estimated Sell Total',
        egyptianPound: 'Egyptian Pound',
        pricePerGramLabel: 'Price per Gram',
        metalValue: 'Metal Value',
        workmanshipTotalLabel: 'Total Workmanship',
        goldKarat24Label: 'Gold 24 Karat',
        goldKarat21Label: 'Gold 21 Karat',
        goldKarat18Label: 'Gold 18 Karat',
        silver999Label: 'Silver 999',
        silver925Label: 'Silver 925',
      },
      zakat: {
        title: 'Gold Zakat Calculator',
        subtitle: 'Calculate your zakat on gold according to Islamic law',
      },
      currencies: {
        home: 'Home',
        currencies: 'Currencies',
        bankRates: 'Bank Rates',
        calculator: 'Calculator',
        indicators: 'Indicators',
        title: 'Currency Exchange Dashboard',
        subtitle: 'Currency Exchange Dashboard',
        marketPulse: 'Market Pulse',
        marketPulseSubtitle: 'Market Pulse - Live USD Rates',
        quickConvert: 'Quick Convert',
        quickConvertSubtitle: 'Quick Convert',
        fullCalculator: 'Full Calculator',
        top5Banks: 'Top 5 Banks',
        top5BanksSubtitle: 'Top 5 Banks - Best Rates',
        viewAll: 'View All',
        tip: '💡 Tip',
        tipText: 'The parallel market offers higher rates but with greater risks. Banks provide security and guarantee but at lower rates.',
        analytics: '📊 Analytics',
        analyticsText: 'For deeper insights and historical analysis, visit the advanced analytics page.',
        goToAnalytics: 'Go to Analytics',
        howToRead: 'How to read the table?',
        buy: 'Buy:',
        buyExplanation: 'The price at which the bank buys currency from you (higher price = better for you)',
        sell: 'Sell:',
        sellExplanation: 'The price at which the bank sells currency to you (lower price = better for you)',
        spread: 'Spread:',
        spreadExplanation: 'The difference between buy and sell prices (lower spread = better)',
        listedBanks: 'Listed Banks',
        availableCurrencies: 'Available Currencies',
        avgSpread: 'Average Spread',
        note: '📌 Note:',
        noteText: 'Rates shown are indicative and may vary between branches. Contact the bank directly to confirm rates before any transaction.',
        noteTextEn: 'Rates shown are indicative and may vary between branches. Contact the bank directly to confirm rates before any transaction.',
        liveUpdate: 'Live Update',
        titleCalculator: 'Smart Currency Calculator',
        subtitleCalculator: 'Smart Currency Calculator - Compare All Scenarios',
        instantCompare: 'Instant Compare',
        instantCompareText: 'Compare official market, parallel market, and credit cards in one moment',
        highAccuracy: 'High Accuracy',
        highAccuracyText: 'Updated prices based on average rates from major banks and markets',
        smartTips: 'Smart Tips',
        smartTipsText: 'Get recommendations on the best conversion method based on amount',
        howItWorks: 'How does the calculator work?',
        step1: 'Enter Amount',
        step1Text: 'Select the currency you want to convert and enter the amount. You can switch between conversion directions with one click.',
        step2: 'View Scenarios',
        step2Text: 'Three scenarios will appear: official exchange, parallel market, and credit cards.',
        step3: 'Choose Best',
        step3Text: 'Compare results and choose the method that suits you best based on price, security, and convenience.',
        importantTips: 'Important Tips',
        smallAmounts: 'For Small Amounts',
        smallAmountsText: 'Banks may be better for ease of access and security, even if the price is slightly lower.',
        largeAmounts: 'For Large Amounts',
        largeAmountsText: 'The price difference between official and parallel becomes very noticeable. Calculated risk may be worth it.',
        creditCards: 'Credit Cards',
        creditCardsText: 'Suitable for international purchases, but be aware of additional fees that may reach 10%.',
        alwaysVerify: 'Always Verify',
        alwaysVerifyText: 'Prices change constantly. Confirm the final price before completing any transaction.',
        compareBanks: 'Compare Banks',
        compareBanksText: 'Compare prices from all banks',
        marketPulseLink: 'Market Pulse',
        marketPulseLinkText: 'Live market prices',
        comingSoon: 'Coming soon...',
        comingSoonText: 'We are currently developing the indicators and charts page for interactive currency movement analysis.',
        charts: 'Charts',
        historicalAnalysis: 'Historical Analysis',
        statistics: 'Statistics',
        backToCurrencies: 'Back to Currency Dashboard',
        parallelMarket: 'Parallel Market',
        parallelMarketLabel: 'Parallel Market',
        digitalDollar: 'Digital Dollar (USDT)',
        digitalDollarLabel: 'Digital Dollar',
        officialAverage: 'Official Average',
        officialAverageLabel: 'Official Average',
        gapVsOfficial: 'Gap vs. Official',
        gapVsOfficialLabel: 'Gap vs. Official',
        change24h: '24h Change',
        change24hLabel: '24h Change',
        averageOfBanks: 'Average of',
        averageOfBanksLabel: 'Average of major banks',
        bankLabel: 'Bank',
        highestBuy: 'Highest Buy',
        lowestSell: 'Lowest Sell',
        hot: 'HOT',
        rank: 'Rank',
        bestPrice: 'Best Price',
        cashOfficial: 'Cash (Official)',
        blackMarket: 'Black Market',
        creditCard: 'Credit Card',
        officialDescription: 'Bank official sell rate',
        parallelDescription: 'Street exchange sell rate',
        creditCardDescription: 'Bank rate + 10% fee',
        popular: 'Popular',
        official: 'Official',
      },
      news: {
        title: 'News',
        subtitle: 'Latest gold, currency, and market news',
        allCategories: 'All',
        gold: 'Gold',
        politics: 'Politics',
        silver: 'Silver',
        currencies: 'Currencies',
        economy: 'Economy',
        crypto: 'Crypto',
        searchPlaceholder: 'Search news...',
        noResults: 'No results',
        noResultsDescription: 'No news matches your search, try different keywords',
        featuredNews: 'Featured News',
        breakingNews: 'Breaking',
        readMore: 'Read more',
        readingTime: 'Reading time',
        minuteRead: 'min read',
        minutesRead: 'mins read',
        publishedAt: 'Published',
        source: 'Source',
        shareArticle: 'Share article',
        copyLink: 'Copy link',
        linkCopied: 'Link copied!',
        bookmark: 'Bookmark',
        bookmarked: 'Bookmarked',
        removeBookmark: 'Remove bookmark',
        relatedNews: 'Related News',
        backToNews: 'Back to News',
        mostFollowed: 'Most Followed',
        quickPrices: 'Quick Prices',
        savedNews: 'Saved News',
        savedNewsSubtitle: 'Articles you saved to read later',
        noSavedNews: 'No saved news',
        noSavedNewsDescription: 'Save news articles that interest you to read later',
        browseNews: 'Browse News',
        savedAt: 'Saved',
        share: {
          twitter: 'Twitter',
          facebook: 'Facebook',
          whatsapp: 'WhatsApp',
          telegram: 'Telegram',
        },
        errorLoading: 'Failed to load news',
      },
    },

    home2026: {
      liveCairo: 'Live — Cairo',
      gold21Title: '21K Gold Gram',
      vsYesterday: 'vs yesterday',
      lastUpdate: 'Last update',
      consumerSell: 'You buy at',
      goldsmithBuy: 'You sell at',
      move30Days: '30-day move',
      calculatePurchase: 'Calculate my purchase',
      notifyPriceChange: 'Notify me on price change',
      allKaratsNow: 'All karats now',
      details: 'Details →',
      bestBankRatePrefix: 'Best',
      bestBankRateSuffix: 'rate at banks',
      highestBuyPrice: 'Highest Price You Can Sell At',
      highestSellPrice: 'Highest Price You Can Buy At',
      lowestSellPrice: 'Lowest Price You Can Buy At',
      parallelMarket: 'Parallel market',
      unofficial: 'Unofficial',
      egyptianPound: 'Egyptian pound',
      buy: 'Price You Can Sell At',
      sell: 'Price You Can Buy At',
      gapVsBanks: 'Gap vs banks',
      banksShowingPrice: 'banks show this price',
      silver: 'Silver',
      liveUpdate: 'Live update',
      createAlertFor: 'Create alert for',
      crypto: 'Cryptocurrencies',
      noData: 'No data available',
      toolGoldCalcName: 'Gold & Silver Calculator',
      toolGoldCalcDesc: 'Calculate the value of your purchases precisely',
      toolZakatName: 'Zakat Calculator',
      toolZakatDesc: 'Zakat on gold, silver and cash',
      toolCurrencyConverterName: 'Currency Converter',
      toolCurrencyConverterDesc: 'Instant conversion between currencies',
      toolGoldDetailedName: 'Detailed Gold Prices',
      toolGoldDetailedDesc: 'All karats and indicators',
      economyNews: 'Economy news',
      newsCenter: 'News center ←',
      newsLoadError: 'Failed to load news',
    },
  },
};
