function testStrictNotEqual(val) {
    if (17 !== val) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);