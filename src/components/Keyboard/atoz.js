import React, {Component} from 'react';
import "./keyboard.css";
import "./action.js";
import {Button, Row} from 'reactstrap';
import {logout} from '../helpers/auth'
import { Route } from 'react-router-dom'

export default class AtoZ extends Component{
 render(){
    
  return ( 
    
    <section>
        <Row>
        <Button color="primary" type="submit" className="keybutton" onClick = {logout}>Log Out</Button>
        </Row>
        <div className = "redirect">
         <Route render={({ history}) => (
            <Button color="info" className = "profile" onClick={() => { history.push('/keyboard1') }}>
                Music
            </Button>
         )} />
        <div className="divider"/>

        <Route render={({ history}) => (
            <Button color="danger" className = "profile" onClick={() => { history.push('/keyboard3') }}>
                Noj
            </Button>
         )} />
         </div>
    <div id="focus" className="keys">

        <div id="row1">
        <div data-key="81" className="key">
            <kbd>q</kbd>
        </div>
        <div data-key="87" className="key">
            <kbd>w</kbd>
        </div>
        <div data-key="69" className="key">
            <kbd>e</kbd>
        </div>
        <div data-key="82" className="key">
            <kbd>r</kbd>
        </div>
        <div data-key="84" className="key">
            <kbd>t</kbd>
        </div>
        <div data-key="89" className="key">
            <kbd>y</kbd>
        </div>
        <div data-key="85" className="key">
            <kbd>u</kbd>
        </div>
        <div data-key="73" className="key">
            <kbd>i</kbd>
        </div>
        <div data-key="79" className="key">
            <kbd>o</kbd>
        </div>
        <div data-key="80" className="key">
            <kbd>p</kbd>
        </div>
        <br/>
        <br/>
        </div>
        <div id="row2">
        <div data-key="65" className="key">
            <kbd>a</kbd>
        </div>
        <div data-key="83" className="key">
            <kbd>s</kbd>
        </div>
        <div data-key="68" className="key">
            <kbd>d</kbd>
        </div>
        <div data-key="70" className="key">
            <kbd>f</kbd>
        </div>
        <div data-key="71" className="key">
            <kbd>g</kbd>
        </div>
        <div data-key="72" className="key">
            <kbd>h</kbd>
        </div>
        <div data-key="74" className="key">
            <kbd>j</kbd>
        </div>
        <div data-key="75" className="key">
            <kbd>k</kbd>
        </div>
        <div data-key="76" className="key">
                <kbd>l</kbd>
        </div>
        <br/>
        <br/>
        </div> 
        <div id="row3">
        <div data-key="90" className="key">
            <kbd>z</kbd>
        </div>
        <div data-key="88" className="key">
            <kbd>x</kbd>
        </div>
        <div data-key="67" className="key">
            <kbd>c</kbd>
        </div>
        <div data-key="86" className="key">
            <kbd>v</kbd>
        </div>
        <div data-key="66" className="key">
            <kbd>b</kbd>
        </div>
        <div data-key="78" className="key">
            <kbd>n</kbd>
        </div>
        <div data-key="77" className="key">
            <kbd>m</kbd>
        </div>
        </div>
    </div>
    
    <div>
        <audio data-key={81} src="./assets/atoz/q.wav" />
        <audio data-key={87} src="./assets/atoz/w.wav" />
        <audio data-key={69} src="./assets/atoz/e.wav" />
        <audio data-key={82} src="./assets/atoz/r.wav" />
        <audio data-key={84} src="./assets/atoz/t.wav" />
        <audio data-key={89} src="./assets/atoz/y.wav" />
        <audio data-key={85} src="./assets/atoz/u.wav" />
        <audio data-key={73} src="./assets/atoz/i.wav" />
        <audio data-key={79} src="./assets/atoz/o.wav" />
        <audio data-key={80} src="./assets/atoz/p.wav" />
        <audio data-key={65} src="./assets/atoz/a.wav" />
        <audio data-key={83} src="./assets/atoz/s.wav" />
        <audio data-key={68} src="./assets/atoz/d.wav" />
        <audio data-key={70} src="./assets/atoz/f.wav" />
        <audio data-key={71} src="./assets/atoz/g.wav" />
        <audio data-key={72} src="./assets/atoz/h.wav" />
        <audio data-key={74} src="./assets/atoz/j.wav" />
        <audio data-key={75} src="./assets/atoz/k.wav" />
        <audio data-key={76} src="./assets/atoz/l.wav" />
        <audio data-key={90} src="./assets/atoz/z.wav" />
        <audio data-key={88} src="./assets/atoz/x.wav" />
        <audio data-key={67} src="./assets/atoz/c.wav" />
        <audio data-key={86} src="./assets/atoz/v.wav" />
        <audio data-key={66} src="./assets/atoz/b.wav" />
        <audio data-key={78} src="./assets/atoz/n.wav" />
        <audio data-key={77} src="./assets/atoz/m.wav" />





      </div>

    </section>
)};
}