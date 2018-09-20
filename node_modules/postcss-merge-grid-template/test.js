const test    = require('ava');
const postcss = require('postcss');
const plugin  = require('./dist/index');

function run(input, opts) {
	return postcss([ plugin(opts) ]).process(input);
}

test('merge grid-template-rows and grid-template-columns', t => run(
`#page {
	display: grid;
	width: 100%;
	height: 250px;
	grid-template-areas: "head head"
	                     "nav  main"
	                     "nav  foot";
	grid-template-rows: 50px 1fr 30px;
	grid-template-columns: 150px 1fr;
}

nav {
	grid-area: nav;
}

main {
	grid-area: main;
}

.header {
	grid-area: head;
}

#footer {
	grid-area: foot;
}`)
.then(({ css: output, warnings }) => {
	t.is(warnings.length, 0);
	t.is(output,
`#page {
	display: grid;
	width: 100%;
	height: 250px;
	grid-template: "a a" 50px "b c" 1fr "b d" 30px / 150px 1fr;
}

nav {
	grid-area: b;
}

main {
	grid-area: c;
}

.header {
	grid-area: a;
}

#footer {
	grid-area: d;
}`);
}));

test('rename grid areas identifiers', t => run(
`body {
  grid-template-areas: "advert .... nav"
                       "advert .... nav";
}

.advert { grid-area: advert }
nav { grid-area: nav }
`)
.then(({ css: output, warnings }) => {
	t.is(warnings.length, 0);
	t.is(output,
`body {
  grid-template-areas: "a . b" "a . b";
}

.advert { grid-area: a }
nav { grid-area: b }
`
	);

}));


test('<\'grid-template-rows\'> / <\'grid-template-columns\'>', t => run(
`.grid-template-a {
  grid-template-rows: 50px calc(10px + 20px);
  grid-template-columns: 1fr 20%;
}`)
	.then(({ css: output, warnings }) => {
		t.is(warnings.length, 0);
		t.is(output,
`.grid-template-a {
  grid-template: 50px calc(10px + 20px) / 1fr 20%;
}`
		);

	}));
