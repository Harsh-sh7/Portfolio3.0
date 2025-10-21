// Component tagger loader for visual editing
module.exports = function(source) {
  // In production or if not needed, just return the source unchanged
  if (process.env.NODE_ENV === 'production') {
    return source;
  }
  
  // For development, you can add component tagging logic here if needed
  // For now, just return the source unchanged
  return source;
};