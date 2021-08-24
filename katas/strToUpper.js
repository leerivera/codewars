function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    for (var i = 0; i < dna.length; i++)
    {
      dna = dna.replace('T', 'U');
    }
    
    return dna;
  }

  String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
  }