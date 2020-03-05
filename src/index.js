import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import Website from './components/Website';

const HotWrapped = hot(() => <Website />);

const mount = document.getElementById('lug');
ReactDOM.render(<HotWrapped />, mount);
