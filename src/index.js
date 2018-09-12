/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0,j=0;
  for(let i=0;i<preferences.length;i++){
    j=i;
    j=preferences[j];
    j=preferences[j];
    if(preferences[j]===i+1)
      count++;
      
  }
  return count;
};
