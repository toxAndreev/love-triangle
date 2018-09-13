/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0,A,B,C;
  for(let i=0;i<preferences.length;i++){
   //2,3,1 
    A=preferences[i];//2
    B=preferences[A-1];//3
    C=preferences[B-1];//1
    if(C===i+1&&A!=B&&A!=C)
      count++;
      
  }
  return count/3;
};
