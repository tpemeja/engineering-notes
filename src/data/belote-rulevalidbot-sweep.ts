// Generated from belote-ai/steps/01-rule-valid-bot/threshold_sweep_seed42.json
// (seed 42, 5,000 paired deals per threshold, thresholds 30-99).
export interface ThresholdSweepPoint {
  threshold: number;
  margin: number;
  marginLower: number;
  marginUpper: number;
  winRate: number;
  winRateLower: number;
  winRateUpper: number;
  declareRate: number;
  declareRateLower: number;
  declareRateUpper: number;
  winRateWhenDeclared: number | null;
  winRateWhenDeclaredLower: number | null;
  winRateWhenDeclaredUpper: number | null;
  winRateWhenDefended: number;
  winRateWhenDefendedLower: number;
  winRateWhenDefendedUpper: number;
}

export const thresholdSweep: ThresholdSweepPoint[] = [
  { threshold: 30, margin: 12.43, marginLower: 10.53, marginUpper: 14.32, winRate: 0.5426, winRateLower: 0.5288, winRateUpper: 0.5564, declareRate: 0.3323, declareRateLower: 0.3231, declareRateUpper: 0.3416, winRateWhenDeclared: 0.7045, winRateWhenDeclaredLower: 0.6887, winRateWhenDeclaredUpper: 0.7198, winRateWhenDefended: 0.3617, winRateWhenDefendedLower: 0.3502, winRateWhenDefendedUpper: 0.3733 },
  { threshold: 31, margin: 13.79, marginLower: 11.88, marginUpper: 15.69, winRate: 0.5592, winRateLower: 0.5454, winRateUpper: 0.5729, declareRate: 0.3026, declareRateLower: 0.2937, declareRateUpper: 0.3117, winRateWhenDeclared: 0.7079, winRateWhenDeclaredLower: 0.6914, winRateWhenDeclaredUpper: 0.7238, winRateWhenDefended: 0.3695, winRateWhenDefendedLower: 0.3583, winRateWhenDefendedUpper: 0.3809 },
  { threshold: 32, margin: 16.43, marginLower: 14.49, marginUpper: 18.36, winRate: 0.5726, winRateLower: 0.5588, winRateUpper: 0.5863, declareRate: 0.2914, declareRateLower: 0.2826, declareRateUpper: 0.3004, winRateWhenDeclared: 0.721, winRateWhenDeclaredLower: 0.7044, winRateWhenDeclaredUpper: 0.737, winRateWhenDefended: 0.3737, winRateWhenDefendedLower: 0.3625, winRateWhenDefendedUpper: 0.3850 },
  { threshold: 33, margin: 16.97, marginLower: 15.05, marginUpper: 18.89, winRate: 0.5806, winRateLower: 0.5669, winRateUpper: 0.5942, declareRate: 0.2691, declareRateLower: 0.2605, declareRateUpper: 0.2779, winRateWhenDeclared: 0.7425, winRateWhenDeclaredLower: 0.7256, winRateWhenDeclaredUpper: 0.7586, winRateWhenDefended: 0.3638, winRateWhenDefendedLower: 0.3528, winRateWhenDefendedUpper: 0.3749 },
  { threshold: 34, margin: 18.20, marginLower: 16.26, marginUpper: 20.14, winRate: 0.5964, winRateLower: 0.5827, winRateUpper: 0.6099, declareRate: 0.2433, declareRateLower: 0.2350, declareRateUpper: 0.2518, winRateWhenDeclared: 0.7349, winRateWhenDeclaredLower: 0.717, winRateWhenDeclaredUpper: 0.7521, winRateWhenDefended: 0.3737, winRateWhenDefendedLower: 0.3629, winRateWhenDefendedUpper: 0.3847 },
  { threshold: 35, margin: 20.69, marginLower: 18.78, marginUpper: 22.60, winRate: 0.6104, winRateLower: 0.5968, winRateUpper: 0.6238, declareRate: 0.2216, declareRateLower: 0.2136, declareRateUpper: 0.2298, winRateWhenDeclared: 0.7644, winRateWhenDeclaredLower: 0.7463, winRateWhenDeclaredUpper: 0.7816, winRateWhenDefended: 0.3778, winRateWhenDefendedLower: 0.3671, winRateWhenDefendedUpper: 0.3887 },
  { threshold: 36, margin: 21.74, marginLower: 19.77, marginUpper: 23.70, winRate: 0.6232, winRateLower: 0.6097, winRateUpper: 0.6365, declareRate: 0.1889, declareRateLower: 0.1813, declareRateUpper: 0.1967, winRateWhenDeclared: 0.7692, winRateWhenDeclaredLower: 0.7497, winRateWhenDeclaredUpper: 0.7876, winRateWhenDefended: 0.3849, winRateWhenDefendedLower: 0.3744, winRateWhenDefendedUpper: 0.3956 },
  { threshold: 37, margin: 23.65, marginLower: 21.68, marginUpper: 25.62, winRate: 0.6310, winRateLower: 0.6175, winRateUpper: 0.6443, declareRate: 0.1655, declareRateLower: 0.1583, declareRateUpper: 0.1729, winRateWhenDeclared: 0.7879, winRateWhenDeclaredLower: 0.7676, winRateWhenDeclaredUpper: 0.8069, winRateWhenDefended: 0.3897, winRateWhenDefendedLower: 0.3793, winRateWhenDefendedUpper: 0.4002 },
  { threshold: 38, margin: 24.64, marginLower: 22.69, marginUpper: 26.60, winRate: 0.6446, winRateLower: 0.6312, winRateUpper: 0.6578, declareRate: 0.1511, declareRateLower: 0.1442, declareRateUpper: 0.1583, winRateWhenDeclared: 0.8001, winRateWhenDeclaredLower: 0.7792, winRateWhenDeclaredUpper: 0.8195, winRateWhenDefended: 0.3893, winRateWhenDefendedLower: 0.3790, winRateWhenDefendedUpper: 0.3997 },
  { threshold: 39, margin: 26.79, marginLower: 24.81, marginUpper: 28.78, winRate: 0.6550, winRateLower: 0.6417, winRateUpper: 0.6681, declareRate: 0.1324, declareRateLower: 0.1259, declareRateUpper: 0.1392, winRateWhenDeclared: 0.8202, winRateWhenDeclaredLower: 0.7986, winRateWhenDeclaredUpper: 0.84, winRateWhenDefended: 0.3986, winRateWhenDefendedLower: 0.3883, winRateWhenDefendedUpper: 0.4089 },
  { threshold: 40, margin: 24.98, marginLower: 23.05, marginUpper: 26.92, winRate: 0.6590, winRateLower: 0.6457, winRateUpper: 0.6720, declareRate: 0.1149, declareRateLower: 0.1088, declareRateUpper: 0.1213, winRateWhenDeclared: 0.8207, winRateWhenDeclaredLower: 0.7975, winRateWhenDeclaredUpper: 0.8418, winRateWhenDefended: 0.3923, winRateWhenDefendedLower: 0.3821, winRateWhenDefendedUpper: 0.4025 },
  { threshold: 41, margin: 26.07, marginLower: 24.09, marginUpper: 28.06, winRate: 0.6602, winRateLower: 0.6470, winRateUpper: 0.6732, declareRate: 0.1075, declareRateLower: 0.1016, declareRateUpper: 0.1137, winRateWhenDeclared: 0.8158, winRateWhenDeclaredLower: 0.7915, winRateWhenDeclaredUpper: 0.8378, winRateWhenDefended: 0.3999, winRateWhenDefendedLower: 0.3898, winRateWhenDefendedUpper: 0.4101 },
  { threshold: 42, margin: 26.12, marginLower: 24.15, marginUpper: 28.10, winRate: 0.6636, winRateLower: 0.6504, winRateUpper: 0.6766, declareRate: 0.0904, declareRateLower: 0.0849, declareRateUpper: 0.0962, winRateWhenDeclared: 0.8308, winRateWhenDeclaredLower: 0.8049, winRateWhenDeclaredUpper: 0.8538, winRateWhenDefended: 0.3964, winRateWhenDefendedLower: 0.3864, winRateWhenDefendedUpper: 0.4065 },
  { threshold: 43, margin: 28.59, marginLower: 26.59, marginUpper: 30.58, winRate: 0.6752, winRateLower: 0.6621, winRateUpper: 0.6880, declareRate: 0.0829, declareRateLower: 0.0777, declareRateUpper: 0.0885, winRateWhenDeclared: 0.8625, winRateWhenDeclaredLower: 0.8374, winRateWhenDeclaredUpper: 0.8843, winRateWhenDefended: 0.4062, winRateWhenDefendedLower: 0.3962, winRateWhenDefendedUpper: 0.4163 },
  { threshold: 44, margin: 27.71, marginLower: 25.71, marginUpper: 29.70, winRate: 0.6768, winRateLower: 0.6637, winRateUpper: 0.6896, declareRate: 0.0770, declareRateLower: 0.0719, declareRateUpper: 0.0824, winRateWhenDeclared: 0.8519, winRateWhenDeclaredLower: 0.8251, winRateWhenDeclaredUpper: 0.8753, winRateWhenDefended: 0.4035, winRateWhenDefendedLower: 0.3935, winRateWhenDefendedUpper: 0.4135 },
  { threshold: 45, margin: 28.34, marginLower: 26.31, marginUpper: 30.37, winRate: 0.6738, winRateLower: 0.6607, winRateUpper: 0.6867, declareRate: 0.0634, declareRateLower: 0.0588, declareRateUpper: 0.0683, winRateWhenDeclared: 0.8454, winRateWhenDeclaredLower: 0.8152, winRateWhenDeclaredUpper: 0.8715, winRateWhenDefended: 0.4099, winRateWhenDefendedLower: 0.4000, winRateWhenDefendedUpper: 0.4199 },
  { threshold: 46, margin: 28.28, marginLower: 26.29, marginUpper: 30.28, winRate: 0.6802, winRateLower: 0.6671, winRateUpper: 0.6930, declareRate: 0.0476, declareRateLower: 0.0436, declareRateUpper: 0.0519, winRateWhenDeclared: 0.8613, winRateWhenDeclaredLower: 0.8274, winRateWhenDeclaredUpper: 0.8895, winRateWhenDefended: 0.4106, winRateWhenDefendedLower: 0.4008, winRateWhenDefendedUpper: 0.4206 },
  { threshold: 47, margin: 28.29, marginLower: 26.25, marginUpper: 30.32, winRate: 0.6746, winRateLower: 0.6615, winRateUpper: 0.6874, declareRate: 0.0428, declareRateLower: 0.0390, declareRateUpper: 0.0469, winRateWhenDeclared: 0.8972, winRateWhenDeclaredLower: 0.8648, winRateWhenDeclaredUpper: 0.9225, winRateWhenDefended: 0.4083, winRateWhenDefendedLower: 0.3985, winRateWhenDefendedUpper: 0.4182 },
  { threshold: 48, margin: 29.79, marginLower: 27.74, marginUpper: 31.83, winRate: 0.6844, winRateLower: 0.6714, winRateUpper: 0.6971, declareRate: 0.0328, declareRateLower: 0.0295, declareRateUpper: 0.0365, winRateWhenDeclared: 0.8994, winRateWhenDeclaredLower: 0.8621, winRateWhenDeclaredUpper: 0.9275, winRateWhenDefended: 0.4154, winRateWhenDefendedLower: 0.4056, winRateWhenDefendedUpper: 0.4253 },
  { threshold: 49, margin: 28.93, marginLower: 26.90, marginUpper: 30.97, winRate: 0.6836, winRateLower: 0.6706, winRateUpper: 0.6963, declareRate: 0.0259, declareRateLower: 0.0230, declareRateUpper: 0.0292, winRateWhenDeclared: 0.8996, winRateWhenDeclaredLower: 0.857, winRateWhenDeclaredUpper: 0.9306, winRateWhenDefended: 0.4127, winRateWhenDefendedLower: 0.4029, winRateWhenDefendedUpper: 0.4225 },
  { threshold: 50, margin: 30.22, marginLower: 28.17, marginUpper: 32.27, winRate: 0.6932, winRateLower: 0.6803, winRateUpper: 0.7058, declareRate: 0.0218, declareRateLower: 0.0191, declareRateUpper: 0.0249, winRateWhenDeclared: 0.9358, winRateWhenDeclaredLower: 0.8951, winRateWhenDeclaredUpper: 0.9614, winRateWhenDefended: 0.4175, winRateWhenDefendedLower: 0.4078, winRateWhenDefendedUpper: 0.4273 },
  { threshold: 51, margin: 27.53, marginLower: 25.49, marginUpper: 29.56, winRate: 0.6694, winRateLower: 0.6562, winRateUpper: 0.6823, declareRate: 0.0191, declareRateLower: 0.0166, declareRateUpper: 0.0220, winRateWhenDeclared: 0.8848, winRateWhenDeclaredLower: 0.8318, winRateWhenDeclaredUpper: 0.9227, winRateWhenDefended: 0.4088, winRateWhenDefendedLower: 0.3991, winRateWhenDefendedUpper: 0.4186 },
  { threshold: 52, margin: 29.13, marginLower: 27.12, marginUpper: 31.15, winRate: 0.6846, winRateLower: 0.6716, winRateUpper: 0.6973, declareRate: 0.0167, declareRateLower: 0.0144, declareRateUpper: 0.0194, winRateWhenDeclared: 0.9461, winRateWhenDeclaredLower: 0.9008, winRateWhenDeclaredUpper: 0.9714, winRateWhenDefended: 0.4141, winRateWhenDefendedLower: 0.4044, winRateWhenDefendedUpper: 0.4239 },
  { threshold: 53, margin: 29.47, marginLower: 27.44, marginUpper: 31.51, winRate: 0.6898, winRateLower: 0.6768, winRateUpper: 0.7025, declareRate: 0.0124, declareRateLower: 0.0104, declareRateUpper: 0.0148, winRateWhenDeclared: 0.9113, winRateWhenDeclaredLower: 0.8481, winRateWhenDeclaredUpper: 0.9497, winRateWhenDefended: 0.4191, winRateWhenDefendedLower: 0.4094, winRateWhenDefendedUpper: 0.4289 },
  { threshold: 54, margin: 28.42, marginLower: 26.35, marginUpper: 30.50, winRate: 0.6846, winRateLower: 0.6716, winRateUpper: 0.6973, declareRate: 0.0110, declareRateLower: 0.0091, declareRateUpper: 0.0132, winRateWhenDeclared: 0.9, winRateWhenDeclaredLower: 0.8298, winRateWhenDeclaredUpper: 0.9432, winRateWhenDefended: 0.4151, winRateWhenDefendedLower: 0.4054, winRateWhenDefendedUpper: 0.4248 },
  { threshold: 55, margin: 31.09, marginLower: 29.07, marginUpper: 33.11, winRate: 0.6950, winRateLower: 0.6821, winRateUpper: 0.7076, declareRate: 0.0082, declareRateLower: 0.0066, declareRateUpper: 0.0102, winRateWhenDeclared: 0.939, winRateWhenDeclaredLower: 0.8651, winRateWhenDeclaredUpper: 0.9737, winRateWhenDefended: 0.4205, winRateWhenDefendedLower: 0.4109, winRateWhenDefendedUpper: 0.4303 },
  { threshold: 56, margin: 29.69, marginLower: 27.69, marginUpper: 31.68, winRate: 0.6878, winRateLower: 0.6748, winRateUpper: 0.7005, declareRate: 0.0057, declareRateLower: 0.0044, declareRateUpper: 0.0074, winRateWhenDeclared: 0.8947, winRateWhenDeclaredLower: 0.7888, winRateWhenDeclaredUpper: 0.9509, winRateWhenDefended: 0.4171, winRateWhenDefendedLower: 0.4074, winRateWhenDefendedUpper: 0.4268 },
  { threshold: 57, margin: 31.28, marginLower: 29.25, marginUpper: 33.30, winRate: 0.6972, winRateLower: 0.6843, winRateUpper: 0.7098, declareRate: 0.0038, declareRateLower: 0.0028, declareRateUpper: 0.0052, winRateWhenDeclared: 0.9474, winRateWhenDeclaredLower: 0.8271, winRateWhenDeclaredUpper: 0.9854, winRateWhenDefended: 0.4245, winRateWhenDefendedLower: 0.4148, winRateWhenDefendedUpper: 0.4342 },
  { threshold: 58, margin: 31.36, marginLower: 29.34, marginUpper: 33.38, winRate: 0.6988, winRateLower: 0.6859, winRateUpper: 0.7114, declareRate: 0.0034, declareRateLower: 0.0024, declareRateUpper: 0.0047, winRateWhenDeclared: 0.9412, winRateWhenDeclaredLower: 0.8091, winRateWhenDeclaredUpper: 0.9837, winRateWhenDefended: 0.4253, winRateWhenDefendedLower: 0.4157, winRateWhenDefendedUpper: 0.4351 },
  { threshold: 59, margin: 29.61, marginLower: 27.60, marginUpper: 31.62, winRate: 0.6900, winRateLower: 0.6770, winRateUpper: 0.7027, declareRate: 0.0020, declareRateLower: 0.0013, declareRateUpper: 0.0031, winRateWhenDeclared: 1.0, winRateWhenDeclaredLower: 0.8389, winRateWhenDeclaredUpper: 1.0, winRateWhenDefended: 0.4176, winRateWhenDefendedLower: 0.4080, winRateWhenDefendedUpper: 0.4273 },
  { threshold: 60, margin: 29.79, marginLower: 27.77, marginUpper: 31.82, winRate: 0.6896, winRateLower: 0.6766, winRateUpper: 0.7023, declareRate: 0.0010, declareRateLower: 0.0005, declareRateUpper: 0.0018, winRateWhenDeclared: 0.9, winRateWhenDeclaredLower: 0.5958, winRateWhenDeclaredUpper: 0.9821, winRateWhenDefended: 0.4199, winRateWhenDefendedLower: 0.4103, winRateWhenDefendedUpper: 0.4296 },
  { threshold: 61, margin: 29.20, marginLower: 27.17, marginUpper: 31.22, winRate: 0.6836, winRateLower: 0.6706, winRateUpper: 0.6963, declareRate: 0.0008, declareRateLower: 0.0004, declareRateUpper: 0.0016, winRateWhenDeclared: 0.875, winRateWhenDeclaredLower: 0.5291, winRateWhenDeclaredUpper: 0.9776, winRateWhenDefended: 0.4163, winRateWhenDefendedLower: 0.4067, winRateWhenDefendedUpper: 0.4260 },
  { threshold: 62, margin: 29.08, marginLower: 27.06, marginUpper: 31.11, winRate: 0.6838, winRateLower: 0.6708, winRateUpper: 0.6965, declareRate: 0.0007, declareRateLower: 0.0003, declareRateUpper: 0.0014, winRateWhenDeclared: 1.0, winRateWhenDeclaredLower: 0.6457, winRateWhenDeclaredUpper: 1.0, winRateWhenDefended: 0.4161, winRateWhenDefendedLower: 0.4065, winRateWhenDefendedUpper: 0.4258 },
  { threshold: 63, margin: 29.23, marginLower: 27.20, marginUpper: 31.25, winRate: 0.6838, winRateLower: 0.6708, winRateUpper: 0.6965, declareRate: 0.0004, declareRateLower: 0.0002, declareRateUpper: 0.0010, winRateWhenDeclared: 1.0, winRateWhenDeclaredLower: 0.5101, winRateWhenDeclaredUpper: 1.0, winRateWhenDefended: 0.4169, winRateWhenDefendedLower: 0.4072, winRateWhenDefendedUpper: 0.4266 },
  { threshold: 64, margin: 29.23, marginLower: 27.20, marginUpper: 31.25, winRate: 0.6838, winRateLower: 0.6708, winRateUpper: 0.6965, declareRate: 0.0004, declareRateLower: 0.0002, declareRateUpper: 0.0010, winRateWhenDeclared: 1.0, winRateWhenDeclaredLower: 0.5101, winRateWhenDeclaredUpper: 1.0, winRateWhenDefended: 0.4169, winRateWhenDefendedLower: 0.4072, winRateWhenDefendedUpper: 0.4266 },
  { threshold: 65, margin: 29.23, marginLower: 27.20, marginUpper: 31.25, winRate: 0.6838, winRateLower: 0.6708, winRateUpper: 0.6965, declareRate: 0.0004, declareRateLower: 0.0002, declareRateUpper: 0.0010, winRateWhenDeclared: 1.0, winRateWhenDeclaredLower: 0.5101, winRateWhenDeclaredUpper: 1.0, winRateWhenDefended: 0.4169, winRateWhenDefendedLower: 0.4072, winRateWhenDefendedUpper: 0.4266 },
  { threshold: 66, margin: 29.37, marginLower: 27.31, marginUpper: 31.43, winRate: 0.6878, winRateLower: 0.6748, winRateUpper: 0.7005, declareRate: 0.0001, declareRateLower: 0.0000, declareRateUpper: 0.0006, winRateWhenDeclared: 1.0, winRateWhenDeclaredLower: 0.2065, winRateWhenDeclaredUpper: 1.0, winRateWhenDefended: 0.4203, winRateWhenDefendedLower: 0.4107, winRateWhenDefendedUpper: 0.4300 },
  { threshold: 67, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 68, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 69, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 70, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 71, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 72, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 73, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 74, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 75, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 76, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 77, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 78, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 79, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 80, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 81, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 82, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 83, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 84, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 85, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 86, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 87, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 88, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 89, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 90, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 91, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 92, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 93, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 94, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 95, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 96, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 97, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 98, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
  { threshold: 99, margin: 30.68, marginLower: 28.66, marginUpper: 32.70, winRate: 0.6956, winRateLower: 0.6827, winRateUpper: 0.7082, declareRate: 0.0000, declareRateLower: 0.0000, declareRateUpper: 0.0004, winRateWhenDeclared: null, winRateWhenDeclaredLower: null, winRateWhenDeclaredUpper: null, winRateWhenDefended: 0.4222, winRateWhenDefendedLower: 0.4126, winRateWhenDefendedUpper: 0.4319 },
];

export const thresholdSweepBest = {
  byMargin: { threshold: 58, margin: 31.36 },
  byWinRate: { threshold: 58, winRate: 0.6988 },
};

// Chart series, pre-derived here rather than computed inline in the MDX
// (MDX's top-level ESM scope doesn't reliably order plain `const`
// declarations relative to JSX-referenced exports).
//
// Past ~67 the bot never declares and every later point repeats the same
// flat values, so the charted range trims to 80 instead of the full 99 to
// avoid a long uninformative flat tail.
const chartData = thresholdSweep.filter((d) => d.threshold < 81);

export const sweepMarginSeries = [
  {
    label: 'Margin vs random',
    color: 'accent' as const,
    points: chartData.map((d) => ({
      x: d.threshold,
      y: d.margin,
      yLower: d.marginLower,
      yUpper: d.marginUpper,
    })),
  },
];

export const sweepWinRateSeries = [
  {
    label: 'Paired win rate vs random',
    color: 'accent' as const,
    points: chartData.map((d) => ({
      x: d.threshold,
      y: d.winRate,
      yLower: d.winRateLower,
      yUpper: d.winRateUpper,
    })),
  },
];

export const sweepBreakdownSeries = [
  {
    label: 'Declare rate',
    color: 'accent' as const,
    points: chartData.map((d) => ({
      x: d.threshold,
      y: d.declareRate,
      yLower: d.declareRateLower,
      yUpper: d.declareRateUpper,
    })),
  },
  {
    label: 'Win rate | declared',
    color: 'amber' as const,
    points: chartData.map((d) => ({
      x: d.threshold,
      y: d.winRateWhenDeclared,
      yLower: d.winRateWhenDeclaredLower,
      yUpper: d.winRateWhenDeclaredUpper,
    })),
  },
  {
    label: 'Win rate | defended',
    color: 'muted' as const,
    points: chartData.map((d) => ({
      x: d.threshold,
      y: d.winRateWhenDefended,
      yLower: d.winRateWhenDefendedLower,
      yUpper: d.winRateWhenDefendedUpper,
    })),
  },
];
