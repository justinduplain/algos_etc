// https://www.codewars.com/kata/reviews/61586a9b12c68f00017a9e68/groups/68a345de23e993da2b8e9ec5

export const likes = (a : string[]) : string => {
  const [NO_ONE, LIKES_THIS, LIKE_THIS, AND, OTHERS] = ['no one', ' likes this', ' like this', ' and ', ' others'];
  const l = a.length;
  
  switch (l) {
    case 0:
      return NO_ONE + LIKES_THIS;
    case 1:
      return a[0] + LIKES_THIS;
    case 2:
      return a[0] + AND + a[1] + LIKE_THIS;
    case 3:
      return a[0] + ', ' + a[1] + AND + a[2] + LIKE_THIS;
    default:
      return a[0] + ', ' + a[1] + AND + `${l - 2}` + OTHERS + LIKE_THIS;
  }
}