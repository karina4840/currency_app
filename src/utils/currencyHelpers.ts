// Currency to country code mapping for FlagsAPI
export const CURRENCY_TO_COUNTRY_MAP: Record<string, string[]> = {
  AED: ["AE"], // UAE Dirham
  AFN: ["AF"], // Afghan Afghani
  ALL: ["AL"], // Albanian Lek
  AMD: ["AM"], // Armenian Dram
  ANG: ["AN"], // Netherlands Antillean Guilder
  AOA: ["AO"], // Angolan Kwanza
  ARS: ["AR"], // Argentine Peso
  AUD: ["AU"], // Australian Dollar
  AWG: ["AW"], // Aruban Florin
  AZN: ["AZ"], // Azerbaijani Manat
  BAM: ["BA"], // Bosnia-Herzegovina Convertible Mark
  BBD: ["BB"], // Barbadian Dollar
  BDT: ["BD"], // Bangladeshi Taka
  BGN: ["BG"], // Bulgarian Lev
  BHD: ["BH"], // Bahraini Dinar
  BIF: ["BI"], // Burundian Franc
  BMD: ["BM"], // Bermudian Dollar
  BND: ["BN"], // Brunei Dollar
  BOB: ["BO"], // Bolivian Boliviano
  BRL: ["BR"], // Brazilian Real
  BSD: ["BS"], // Bahamian Dollar
  BTN: ["BT"], // Bhutanese Ngultrum
  BWP: ["BW"], // Botswana Pula
  BYN: ["BY"], // Belarusian Ruble
  BZD: ["BZ"], // Belize Dollar
  CAD: ["CA"], // Canadian Dollar
  CDF: ["CD"], // Congolese Franc
  CHF: ["CH"], // Swiss Franc
  CLP: ["CL"], // Chilean Peso
  CNY: ["CN"], // Chinese Yuan
  COP: ["CO"], // Colombian Peso
  CRC: ["CR"], // Costa Rican Colón
  CUC: ["CU"], // Cuban Convertible Peso
  CUP: ["CU"], // Cuban Peso
  CVE: ["CV"], // Cape Verdean Escudo
  CZK: ["CZ"], // Czech Koruna
  DJF: ["DJ"], // Djiboutian Franc
  DKK: ["DK"], // Danish Krone
  DOP: ["DO"], // Dominican Peso
  DZD: ["DZ"], // Algerian Dinar
  EGP: ["EG"], // Egyptian Pound
  ERN: ["ER"], // Eritrean Nakfa
  ETB: ["ET"], // Ethiopian Birr
  EUR: [
    "EU",
    "AT",
    "BE",
    "CY",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PT",
    "SK",
    "SI",
    "ES",
  ], // Euro
  FJD: ["FJ"], // Fijian Dollar
  FKP: ["FK"], // Falkland Islands Pound
  GBP: ["GB"], // British Pound Sterling
  GEL: ["GE"], // Georgian Lari
  GHS: ["GH"], // Ghanaian Cedi
  GIP: ["GI"], // Gibraltar Pound
  GMD: ["GM"], // Gambian Dalasi
  GNF: ["GN"], // Guinean Franc
  GTQ: ["GT"], // Guatemalan Quetzal
  GYD: ["GY"], // Guyanese Dollar
  HKD: ["HK"], // Hong Kong Dollar
  HNL: ["HN"], // Honduran Lempira
  HRK: ["HR"], // Croatian Kuna
  HTG: ["HT"], // Haitian Gourde
  HUF: ["HU"], // Hungarian Forint
  IDR: ["ID"], // Indonesian Rupiah
  ILS: ["IL"], // Israeli New Shekel
  INR: ["IN"], // Indian Rupee
  IQD: ["IQ"], // Iraqi Dinar
  IRR: ["IR"], // Iranian Rial
  ISK: ["IS"], // Icelandic Króna
  JMD: ["JM"], // Jamaican Dollar
  JOD: ["JO"], // Jordanian Dinar
  JPY: ["JP"], // Japanese Yen
  KES: ["KE"], // Kenyan Shilling
  KGS: ["KG"], // Kyrgyzstani Som
  KHR: ["KH"], // Cambodian Riel
  KMF: ["KM"], // Comorian Franc
  KPW: ["KP"], // North Korean Won
  KRW: ["KR"], // South Korean Won
  KWD: ["KW"], // Kuwaiti Dinar
  KYD: ["KY"], // Cayman Islands Dollar
  KZT: ["KZ"], // Kazakhstani Tenge
  LAK: ["LA"], // Lao Kip
  LBP: ["LB"], // Lebanese Pound
  LKR: ["LK"], // Sri Lankan Rupee
  LRD: ["LR"], // Liberian Dollar
  LSL: ["LS"], // Lesotho Loti
  LYD: ["LY"], // Libyan Dinar
  MAD: ["MA"], // Moroccan Dirham
  MDL: ["MD"], // Moldovan Leu
  MGA: ["MG"], // Malagasy Ariary
  MKD: ["MK"], // Macedonian Denar
  MMK: ["MM"], // Myanmar Kyat
  MNT: ["MN"], // Mongolian Tögrög
  MOP: ["MO"], // Macanese Pataca
  MRU: ["MR"], // Mauritanian Ouguiya
  MUR: ["MU"], // Mauritian Rupee
  MVR: ["MV"], // Maldivian Rufiyaa
  MWK: ["MW"], // Malawian Kwacha
  MXN: ["MX"], // Mexican Peso
  MYR: ["MY"], // Malaysian Ringgit
  MZN: ["MZ"], // Mozambican Metical
  NAD: ["NA"], // Namibian Dollar
  NGN: ["NG"], // Nigerian Naira
  NIO: ["NI"], // Nicaraguan Córdoba
  NOK: ["NO"], // Norwegian Krone
  NPR: ["NP"], // Nepalese Rupee
  NZD: ["NZ"], // New Zealand Dollar
  OMR: ["OM"], // Omani Rial
  PAB: ["PA"], // Panamanian Balboa
  PEN: ["PE"], // Peruvian Sol
  PGK: ["PG"], // Papua New Guinean Kina
  PHP: ["PH"], // Philippine Peso
  PKR: ["PK"], // Pakistani Rupee
  PLN: ["PL"], // Polish Złoty
  PYG: ["PY"], // Paraguayan Guaraní
  QAR: ["QA"], // Qatari Riyal
  RON: ["RO"], // Romanian Leu
  RSD: ["RS"], // Serbian Dinar
  RUB: ["RU"], // Russian Ruble
  RWF: ["RW"], // Rwandan Franc
  SAR: ["SA"], // Saudi Riyal
  SBD: ["SB"], // Solomon Islands Dollar
  SCR: ["SC"], // Seychellois Rupee
  SDG: ["SD"], // Sudanese Pound
  SEK: ["SE"], // Swedish Krona
  SGD: ["SG"], // Singapore Dollar
  SHP: ["SH"], // Saint Helena Pound
  SLL: ["SL"], // Sierra Leonean Leone
  SOS: ["SO"], // Somali Shilling
  SRD: ["SR"], // Surinamese Dollar
  SSP: ["SS"], // South Sudanese Pound
  STN: ["ST"], // São Tomé and Príncipe Dobra
  SVC: ["SV"], // Salvadoran Colón
  SYP: ["SY"], // Syrian Pound
  SZL: ["SZ"], // Eswatini Lilangeni
  THB: ["TH"], // Thai Baht
  TJS: ["TJ"], // Tajikistani Somoni
  TMT: ["TM"], // Turkmenistan Manat
  TND: ["TN"], // Tunisian Dinar
  TOP: ["TO"], // Tongan Paʻanga
  TRY: ["TR"], // Turkish Lira
  TTD: ["TT"], // Trinidad and Tobago Dollar
  TWD: ["TW"], // New Taiwan Dollar
  TZS: ["TZ"], // Tanzanian Shilling
  UAH: ["UA"], // Ukrainian Hryvnia
  UGX: ["UG"], // Ugandan Shilling
  USD: ["US"], // United States Dollar
  UYU: ["UY"], // Uruguayan Peso
  UZS: ["UZ"], // Uzbekistani Som
  VES: ["VE"], // Venezuelan Bolívar
  VND: ["VN"], // Vietnamese Đồng
  VUV: ["VU"], // Vanuatu Vatu
  WST: ["WS"], // Samoan Tālā
  XAF: ["CM", "CF", "TD", "CG", "GQ", "GA", "GQ", "TD"], // Central African CFA Franc
  XCD: ["AG", "DM", "GD", "LC", "VC", "KN", "AI", "MS"], // East Caribbean Dollar
  XOF: ["BJ", "BF", "CI", "GW", "ML", "NE", "SN", "TG"], // West African CFA Franc
  XPF: ["PF", "NC", "WF"], // CFP Franc
  YER: ["YE"], // Yemeni Rial
  ZAR: ["ZA"], // South African Rand
  ZMW: ["ZM"], // Zambian Kwacha
  ZWL: ["ZW"], // Zimbabwean Dollar
};

// Create reverse mapping
export const COUNTRY_TO_CURRENCY_MAP: Record<string, string> = {};

Object.entries(CURRENCY_TO_COUNTRY_MAP).forEach(([currency, countries]) => {
  countries.forEach((country) => {
    COUNTRY_TO_CURRENCY_MAP[country] = currency;
  });
});

/**
 * Get country codes for a currency
 */
export const getCountryCodesForCurrency = (currencyCode: string): string[] => {
  return CURRENCY_TO_COUNTRY_MAP[currencyCode.toUpperCase()] || [];
};

/**
 * Get currency for a country code
 */
export const getCurrencyForCountry = (countryCode: string): string | null => {
  return COUNTRY_TO_CURRENCY_MAP[countryCode.toUpperCase()] || null;
};

/**
 * Get primary country code for a currency (first in the list)
 */
export const getPrimaryCountryForCurrency = (
  currencyCode: string
): string | null => {
  const countries = getCountryCodesForCurrency(currencyCode);
  return countries.length > 0 ? countries[0] : null;
};

/**
 * Get flag image URL from FlagsAPI for a currency
 */
export const getFlagForCurrency = (
  currencyCode: string,
  style: "flat" | "shiny" = "flat",
  size: 16 | 24 | 32 | 48 | 64 = 32
): string | null => {
  const countryCode = getPrimaryCountryForCurrency(currencyCode);
  if (!countryCode) return null;

  return `https://flagsapi.com/${countryCode}/${style}/${size}.png`;
};

/**
 * Get flag image URL from FlagsAPI for a country code
 */
export const getFlagForCountry = (
  countryCode: string,
  style: "flat" | "shiny" = "flat",
  size: 16 | 24 | 32 | 48 | 64 = 64
): string => {
  return `https://flagsapi.com/${countryCode.toUpperCase()}/${style}/${size}.png`;
};

/**
 * Get all supported currency codes
 */
export const getAllCurrencyCodes = (): string[] => {
  return Object.keys(CURRENCY_TO_COUNTRY_MAP);
};

/**
 * Get all supported country codes
 */
export const getAllCountryCodes = (): string[] => {
  return Object.keys(COUNTRY_TO_CURRENCY_MAP);
};

/**
 * Check if a currency is supported
 */
export const isCurrencySupported = (currencyCode: string): boolean => {
  return currencyCode.toUpperCase() in CURRENCY_TO_COUNTRY_MAP;
};

/**
 * Check if a country is supported
 */
export const isCountrySupported = (countryCode: string): boolean => {
  return countryCode.toUpperCase() in COUNTRY_TO_CURRENCY_MAP;
};

/**
 * Get currency display information including flag
 */
export const getCurrencyDisplayInfo = (
  currencyCode: string,
  style: "flat" | "shiny" = "flat",
  size: 16 | 24 | 32 | 48 | 64 = 32
) => {
  const countryCode = getPrimaryCountryForCurrency(currencyCode);
  const flagUrl = countryCode
    ? getFlagForCountry(countryCode, style, size)
    : null;

  return {
    currencyCode,
    countryCode,
    flagUrl,
    isSupported: isCurrencySupported(currencyCode),
  };
};

/**
 * Get all currencies with their flag information
 */
export const getAllCurrenciesWithFlags = (
  style: "flat" | "shiny" = "flat",
  size: 16 | 24 | 32 | 48 | 64 = 32
) => {
  return getAllCurrencyCodes().map((currencyCode) => {
    const info = getCurrencyDisplayInfo(currencyCode, style, size);
    return {
      currencyCode: info.currencyCode,
      flagUrl: info.flagUrl,
      countryCode: info.countryCode,
    };
  });
};
