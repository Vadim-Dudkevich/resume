import tippy, { animateFill } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

let btn = document.querySelector('.btn-print');
btn.onclick = () => window.print();

tippy('#btnPrint', {
  content: 'Print my resume. Set print settings (scale 75%)',
  delay: [250, null],
  placement: 'top',

  animateFill: true,
  plugins: [animateFill],
});
