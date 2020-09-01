import React from "react";
import "./main.css";

export default function App() {
  return (
        <div id="main">
            <div id="main-left"></div>
            <div id="main-right"></div>
            <div id="main-sword"></div>
            <div id="descriptor-panel">
                <div id="descriptor-thumbnail"></div>
                <div id="descriptor-header">Descriptor</div>
                <div id="descriptor-body">
                    My father's day gift 2020, my beautiful wife had this amazing sword forged for me. It's a masterpiece, what a might gift!
                </div>
            </div>
            <div id="main-menu">
                <div id="header">davidyerxa.com</div>
                <ul>
                    <li><span class="menuitem-header">about</span>
                        <ul>
                            <li>This website is my portfolio blah blah blah.</li>
                        </ul>
                    </li>
                    <li><span class="menuitem-header">interface design</span>
                        <ul>
                            <li>java swing</li>
                            <li>css and html</li>
                        </ul>
                    </li>
                </ul>
            </div>
          </div>
  );
}
