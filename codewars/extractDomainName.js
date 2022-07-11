//link: https://www.codewars.com/kata/514a024011ea4fb54200004b

const domainName = url => url.split(/www|http\:\/\/|https\:\/\/|\./).filter(val => val.length)[0]

