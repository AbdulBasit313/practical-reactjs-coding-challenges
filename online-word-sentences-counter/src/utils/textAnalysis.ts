import { pronouns } from '../data/pronouns'

/**
 * Count the total number of words in the text
 * @param text - The input text to analyze
 * @returns The number of words
 */
export const countWords = (text: string): number => {
  if (!text.trim()) return 0
  return text.trim().split(/\s+/).length
}

/**
 * Count the total number of characters (including spaces)
 * @param text - The input text to analyze
 * @returns The number of characters
 */
export const countCharacters = (text: string): number => {
  return text.length
}

/**
 * Count the total number of sentences
 * @param text - The input text to analyze
 * @returns The number of sentences
 */
export const countSentences = (text: string): number => {
  if (!text.trim()) return 0
  // Match sentences ending with . ! or ?
  const sentencePattern = /[.!?]+/g
  const matches = text.match(sentencePattern)
  return matches ? matches.length : 0
}

/**
 * Count the total number of paragraphs
 * @param text - The input text to analyze
 * @returns The number of paragraphs
 */
export const countParagraphs = (text: string): number => {
  if (!text.trim()) return 0
  // Split by double newlines or more to identify paragraphs
  const paragraphs = text.split(/\n\s*\n+/)
  return paragraphs.filter((para) => para.trim().length > 0).length
}

/**
 * Count the total number of pronouns in the text
 * @param text - The input text to analyze
 * @returns The number of pronouns found
 */
export const countPronouns = (text: string): number => {
  if (!text.trim()) return 0
  const words = text.toLowerCase().split(/\s+/)
  return words.filter((word) => {
    // Remove punctuation from word
    const cleanWord = word.replace(/[.,!?;:'"()-]/g, '')
    return pronouns.includes(cleanWord)
  }).length
}

/**
 * Calculate average reading time in minutes
 * Assumes average reading speed of 200 words per minute
 * @param text - The input text to analyze
 * @returns The reading time in minutes as a string (e.g., "2.5 min" or "< 1 min")
 */
export const calculateReadingTime = (text: string): string => {
  const wordCount = countWords(text)
  const wordsPerMinute = 200
  const readingTimeMinutes = wordCount / wordsPerMinute

  if (readingTimeMinutes < 1) {
    return '< 1 min'
  }

  return `${readingTimeMinutes.toFixed(1)} min`
}

/**
 * Find the longest word in the text
 * @param text - The input text to analyze
 * @returns The longest word, or an empty string if no text
 */
export const findLongestWord = (text: string): string => {
  if (!text.trim()) return '-'

  const words = text.split(/\s+/)
  let longestWord = ''

  words.forEach((word) => {
    // Remove punctuation from word
    const cleanWord = word.replace(/[.,!?;:'"()\-]/g, '')
    if (cleanWord.length > longestWord.length) {
      longestWord = cleanWord
    }
  })

  return longestWord || '-'
}

/**
 * Get all analysis results for the given text
 * @param text - The input text to analyze
 * @returns An object containing all analysis results
 */
export const analyzeText = (text: string) => {
  return {
    words: countWords(text),
    characters: countCharacters(text),
    sentences: countSentences(text),
    paragraphs: countParagraphs(text),
    pronouns: countPronouns(text),
    readingTime: calculateReadingTime(text),
    longestWord: findLongestWord(text),
  }
}
