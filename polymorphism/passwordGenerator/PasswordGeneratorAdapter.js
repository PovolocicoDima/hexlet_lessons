export default class PasswordGeneratorAdapter {
    // BEGIN (write your solution here)
    generatePassword(length, options) {
        const defaultOptions = {
          symbols: false,
          numbers: false,
          uppercase: false,
        };
    
        const preparedOptions = Object.fromEntries(options.map((o) => [o, true]));
        const finalOptions = { ...defaultOptions, ...preparedOptions, length };
        return generator.generate(finalOptions);
      }
    // END
}

