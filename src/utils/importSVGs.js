function requireAllSVGs(r) {
  r.keys().forEach(r);
}

export default pathToSVGs => requireAllSVGs(require.context(pathToSVGs, true, /\.svg$/));
