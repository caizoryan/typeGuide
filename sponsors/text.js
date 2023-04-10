let names = [];
let tier1 =
  "OCAD University (undisclosed), aftermodern.lab inc. (undisclosed), Canadian Council of the Arts (undisclosed)";
let tier2a =
  "David Carson ($45,000), Saul Bass ($45,000), Paula Scher ($45,000), Michael Bierut ($45,000), Massimo Vignelli ($42,000), Milton Glaser ($42,000), Paul Rand ($42,000), Alan Fletcher ($42,000), Hermann Zapf ($40,000), Lester Beall ($40,000), Jessica Walsh ($40,000), Aries Moross ($38,000), Gaby Lord ($25,000), Morag Myerscough ($25,000), Frank Chimero ($20,000), Annie Atkins ($20,000), Chip Kidd ($15,000), Elana Schlenker ($14,000), Mike Kus ($11,000)";
let tier2b =
  "Claude Garamond, Jan Tschichold, William Golden, Jacqueline Casey, Cipe Pineles, Susan Kare, Abram Games, Armin Hofmann, Josef Muller-Brockmann, Seymour Chwast, Alexey Brodovitch, Herb Lubalin, Max Miedinger, April Greiman, John Maeda, El Lissitzky, Ladislav Sutnar, Alvin Lustig, Muriel Cooper, Lucian Bernhard, Otl Aicher, Erik Nitsch, Neville Brody, Ivan Charmayeff, Adrian Frutiger, Bradbury Thompson, Peter Saville, Wolfgang Weingart";
let tier3 =
  "BMO Canada ($8,000), Apple Canada Inc. ($8,000), Adobe Canada Foundation ($7,000), Campea Family Foundation ($7,000), Another Made Up Foundation ($7,000), Cultural Design Foundation ($5,000), TYPE3 Kids Foundation ($3,000), Art with Machines ($3,000), Hidden Leaf Foundation ($3,000), Encore Division ($3,000), Graphic Foundations Foundation ($3,000), Art Matters ($3,000), McCulloch International Arts Council Ltd. ($3,000).";

let tier4 =
  "Alvar Aalto, Ron Arad, Jonathan Barnbrook, Manolo Blahnik, Robert Brownjohn, Isambard Kingdom Brunel, Sam Buxton, Matthew Carter, Hussein Chalayan, Luigi Colani, Joe Colombo, Joshua Davis, Christian Dior, Tom Dixon, John Galliano, Norman Foster, Eileen Gray, Martí Guixé, Zaha Hadid, Alec Issigonis, Arne Jacobsen, Michael Marriott, Jonathan Ive, Ross Lovegrove, Alexander McQueen, Jasper Morrison, Marc Newson, Isamu Noguchi, David Mellor, Jean Muir, Chris O’Shea, Ernest Race, Dieter Rams, Charles Rennie Mackintosh, Richard Rogers, Jerszy Seymour, Stefan Sagmeister, Ed Swan, Richard Sweeney, Philip Treacy, Verner Panton, Phyllis Pearsall, Vivienne Westwood, Robert Wilson, Ben Wilson, Philip Worthington, Frank Lloyd Wright, Michael Young, Pascal Anson, Assa Ashuach, Luis Barragán, Mathias Bengtsson, Sebastian Bergne, Flaminio Bertoni, Derek Birdsall, Irma Boom, Tord Boontje, R. Buckminster Fuller, Achille Castiglioni, Wells Coates, Christopher Dresser, Matali Crasset, Giles Gilbert Scott, Ernö Goldfinger, Konstantin Grcic, Thomas Heatherwick";

let tier5 =
  "Hunt Stromberg, Grant, Dawn Day, Newt Lisard, Wilma McClatchie, Rick Blaine, Blane McDonnagh, Stacker Pentecost, John Matrix, Pressure Maxwell, Cole Trickle, Phillip Vandamm, Elle Driver, Daryl Hannah, Lee Christmas, Dr. Christmas Jones, Archer Maggot, Will Kempe, Rick Von Sloneker, Max Christmas, Vince Majestyk, Stathis Borans, Verbal Kint, Lancaster Dodd, Dr. Chase Meridian, Sy Snootles, Mr. Hand, Vincent Vega, Otis B. Driftwood, Lili Von Shtupp, Mister Shhh, Cosmo Brown, C.C. Baxter, Barton Fink, Sugar Kane Kowalczyk, Broomhilda von Shaft, Santanico Pandemonium, Donnie Darko, Charles Foster Kane, Indiana Jones, Sidney J. Mussburger, Eve Harrington, Snake Plissken, Dr. Michael Hfuhruhurr, Norma Desmond, Luke Skywalker, Han Solo, Buckaroo Banzai, Darth Vader, Shack, Cigaret Carradine, No. 1";

let tier6 =
  "Antoni Gaudi, James Dyson, Marcel Breuer, Charles and Ray Eames, Philippe Starck, Ludwig Mies van der Rohe, Aleksandr Rodchenko, Le Corbusier, Walter Gropius, Sir Jonathan Ive, Louis Kahn, David Adjaye, Daniel Libeskind, Bjarke Ingels, Elizabeth Scofidio, Tadao Ando, Craig Edward Dykers and Kjetil Trædal Thorsen";

let tier7blank =
  "Hunt Stromberg, Grant, Dawn Day, Newt Lisard, John Matrix, Pressure Maxwell, Cole Trickle, Phillip Vandamm, Elle Driver, Daryl Hannah, Lee Christmas, Dr. Christmas Jones, Will Kempe, Rick Von Sloneker, Max Christmas, Vince Majestyk, Stathis Borans, Verbal Kint, Lancaster Dodd, Dr. Chase Meridian, Sy Snootles, Mr. Hand, Vincent Vega, Otis B. Driftwood, Lili Von Shtupp, Mister Shhh, Cosmo Brown, C.C. Baxter, Barton Fink, Sugar Kane Kowalczyk, Broomhilda von Shaft, Santanico Pandemonium, Donnie Darko, Charles Foster Kane, Indiana Jones, Sidney J. Mussburger, Eve Harrington, Snake Plissken, Dr. Michael Hfuhruhurr, Norma Desmond, Luke Skywalker, Han Solo, Buckaroo Banzai, Darth Vader, Shack, Cigaret Carradine, No. 1, Abcgramchutiyalauderundhugau fuck jaden";

for (const x of tier1.split(", "))
  names.push({ name: "« " + x + " »", tier: "1" });
for (const x of tier2a.split(", ")) names.push({ name: x, tier: "2a" });
for (const x of tier2b.split(", ")) names.push({ name: x, tier: "2b" });
for (const x of tier3.split(", ")) names.push({ name: x, tier: "3" });
for (const x of tier4.split(", ")) names.push({ name: x, tier: "4" });
for (const x of tier5.split(", ")) names.push({ name: x, tier: "5" });
for (const x of tier6.split(", ")) names.push({ name: x, tier: "6" });
for (const x of tier7blank.split(", ")) names.push({ name: x, tier: "7blank" });

// let test = [];
//
// for (const x of tier1.split(", ")) test.push(x);
// for (const x of tier2a.split(", ")) test.push(x);
// for (const x of tier2b.split(", ")) test.push(x);
// for (const x of tier3.split(", ")) test.push(x);
// for (const x of tier4.split(", ")) test.push(x);
// for (const x of tier5.split(", ")) test.push(x);
// for (const x of tier6.split(", ")) test.push(x);
//
// console.log("total names = ", test.length);
// console.log("unique names = ", [...new Set(test)].length);
//
// const toFindDuplicates = (arry) =>
//   arry.filter((item, index) => arry.indexOf(item) !== index);
// const duplicateElements = toFindDuplicates(test);
// console.log(duplicateElements);
//
// console.log(names.length);
