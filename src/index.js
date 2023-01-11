import * as d3 from 'd3';

// pages
import intro from './pages/intro';
import util from './pages/util-elicitation';
import feedback from './pages/feedback';

const pages = {intro, util, feedback};

function attachDebugView() {
  const content = Object.keys(pages)
    .map((name) => /* html */ `<a href="/#${name}">${name}</a>`)
    .join('\n');
  d3.select('#debug').html(content);
}

document.addEventListener('DOMContentLoaded', function (e) {
  buildApp();
  attachDebugView();
});

window.addEventListener(
  'hashchange',
  () => {
    buildApp();
  },
  false
);

// TODO persist state stuff

function buildApp() {
  const hash = window.location.hash.replaceAll('#', '');
  const page = pages[hash] || pages.intro;
  console.log(hash);
  d3.select('#app').html(page.content);
  page.script();
}
