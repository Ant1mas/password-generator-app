type CharactersGroups = 
  'lowercase' | 
  'uppercase' |
  'numbers' |
  'symbols'

type CharactersGroupsArray = CharactersGroups[]

export default function getPasswordsStrength(length = 1, groups:CharactersGroupsArray = []) {
  const GROUPS_COMBINATIONS = [
    ['numbers'],
    ['lowercase'],
    ['lowercase', 'uppercase'],
    ['numbers', 'lowercase', 'uppercase'],
    ['numbers', 'lowercase', 'uppercase', 'symbols'],
  ]
  const LENGTH_GROUP_TIME = {
    6: ['Instantly', 'Instantly', 'Instantly', 'Instantly', 'Instantly'],
    7: ['Instantly', 'Instantly', '2 seconds', '7 seconds', '31 seconds'],
    8: ['Instantly', 'Instantly', '2 minutes', '7 minutes', '39 minutes'],
    9: ['Instantly', '10 seconds', '1 hour', '7 hours', '2 days'],
    10: ['Instantly', '4 minutes', '3 days', '3 weeks', '5 months'],
    11: ['Instantly', '2hours', '5 months', '3 years', '34 years'],
    12: ['2 seconds', '2 days', '24 years', '200 years', '3k years'],
    13: ['19 seconds', '2 months', '1k years', '12k years', '202k years'],
    14: ['3 minutes', '4 years', '64k years', '750k years', '16m years'],
    15: ['32 minutes', '100 years', '3m years', '46m years', '1bn years'],
    16: ['5 hours', '3k years', '173m years', '3bn years', '92bn years'],
    17: ['2 days', '69k years', '9bn years', '179bn years', '7th years'],
    18: ['3 weeks', '2m years', '467bn years', '11th years', '438th years'],
  }
  // const LENGTH_GROUP_TIME_SECONDS = {
  //   6: [0, 0, 0, 0, 0],
  //   7: [0, 0, 2, 7, 31],
  //   8: [0, 0, 2*60, 7*60, 39*60],
  //   9: [0, 1, 1*60*60, 7*60*60, 2*60*60*24],
  //   10: [0, 4*60, 3*60*60*24, 3*60*60*24*7, 5*60*60*24*30],
  //   11: [0, 2*60*60, 5*60*60*24*30, 3*60*60*24*30*12, 34*60*60*24*30*12],
  //   12: [2, 2*60*60*24, 24*60*60*24*30*12, 200*60*60*24*30*12, 3*1000*60*60*24*30*12],
  //   13: [19, 2*60*60*24*30, 1*1000*60*60*24*30*12, 12*1000*60*60*24*30*12, 202*1000*60*60*24*30*12],
  //   14: [3*60, 4*60*60*24*30, 64*1000*60*60*24*30*12, 750*1000*60*60*24*30*12, 16*1000*1000*60*60*24*30*12],
  //   15: [32*60, 100*60*60*24*30*12, 3*1000*1000*60*60*24*30*12, 46*1000*1000*60*60*24*30*12, 1*1000*1000*1000*60*60*24*30*12],
  //   16: [5*60*60, 3*1000*60*60*24*30*12, 173*1000*1000*60*60*24*30*12, 3*1000*1000*1000*60*60*24*30*12, 92*1000*1000*1000*60*60*24*30*12],
  //   17: [2*60*60*24, 69*1000*60*60*24*30*12, 9*1000*1000*1000*60*60*24*30*12, 179*1000*1000*1000*60*60*24*30*12, 7*1000*1000*1000*1000*60*60*24*30*12],
  //   18: [3*60*60*24*7, 2*1000*1000*60*60*24*30*12, 467*1000*1000*1000*60*60*24*30*12, 11*1000*1000*1000*1000*60*60*24*30*12, 438*1000*1000*1000*1000*60*60*24*30*12],
  // }
  let currentGroupCombination = -1
  if (groups.includes('numbers')) {
    currentGroupCombination = 0
    if (
      groups.includes('lowercase') ||
      groups.includes('uppercase')
    ) {
      currentGroupCombination = 2
      if (groups.includes('symbols')) {
        currentGroupCombination = 3
      }
    }
    if (
      groups.includes('lowercase') &&
      groups.includes('uppercase')
    ) {
      currentGroupCombination = 3
      if (groups.includes('symbols')) {
        currentGroupCombination = 4
      }
    }
  } else {
    if (groups.includes('lowercase')) {
      currentGroupCombination = 1
      if (groups.includes('uppercase')) {
        currentGroupCombination = 2
        if (groups.includes('symbols')) {
          currentGroupCombination = 3
        }
      }
      if (groups.includes('symbols')) {
        currentGroupCombination = 2
      }
    } else {
      if (groups.includes('uppercase')) {
        currentGroupCombination = 1
        if (groups.includes('symbols')) {
          currentGroupCombination = 2
        }
      } else {
        if (groups.includes('symbols')) {
          currentGroupCombination = 1
          if (groups.includes('numbers')) {
            currentGroupCombination = 2
          }
        }
      }
    }
  }
  const numberOfCombinations = GROUPS_COMBINATIONS.length * Object.keys(LENGTH_GROUP_TIME).length
  let strengthPercent = ((length - 6) * GROUPS_COMBINATIONS.length + (currentGroupCombination + 1)) / numberOfCombinations * 100
  strengthPercent = strengthPercent > 100 ? 100 : strengthPercent
  strengthPercent = strengthPercent < 0 ? 0 : strengthPercent
  strengthPercent = currentGroupCombination < 0 ? 0 : strengthPercent
  return {
    percent: strengthPercent,
    crackingTime: '',
  }
}
