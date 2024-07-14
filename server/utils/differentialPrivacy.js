function laplaceMechanism(value, sensitivity, epsilon) {
  const scale = sensitivity / epsilon;
  const noise = laplaceNoise(scale);
  return value + noise;
}

function laplaceNoise(scale) {
  const u = Math.random() - 0.5;
  return -scale * Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
}

function applyDifferentialPrivacyToSum(data, sensitivity, epsilon) {
  const sum = data.reduce((acc, val) => acc + val, 0);
  return laplaceMechanism(sum, sensitivity, epsilon);
}

module.exports = {
  applyDifferentialPrivacyToSum,
};
