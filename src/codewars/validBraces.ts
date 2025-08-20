export function validBraces(braces: string): boolean {

  // if not even, not valid
  if (braces.length % 2 !== 0) return false;

  const opens = ['(', '[', '{',];

  // map closers to opens
  const match: Record<string, string> = {
    ')' : '(', 
    ']' : '[',
    '}' : '{',
  }
  
  // track with a stack, closing braces need to be FIFO
  const stack: string[] = [];

  for(const brace of braces) {
    if (opens.includes(brace)) {
        stack.push(brace);
    } else {
        // if stack is empty, we're mismatched
        if (stack.length === 0) return false;
        const last = stack.pop()!;
        // if brace doesn't match last in, we're mismatched
        if (last !== match[brace]) return false;
    }
  }

  // if the stack is emty, we have all matches
  return stack.length === 0;
}

const badBraces = "[()}]{}";

console.log(validBraces(badBraces));