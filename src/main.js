import Alpine from 'alpinejs';
import { counter } from './components/counter.js';
import { toggle } from './components/toggle.js';
import { list } from './components/list.js';
import './style.css';

Alpine.data('counter', counter);
Alpine.data('toggle', toggle);
Alpine.data('list', list);

Alpine.start();
