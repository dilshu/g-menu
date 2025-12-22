/* global-menu.js */
(function() {
    const initMenu = function() {
        // body അല്ലെങ്കിൽ head ലഭ്യമല്ലെങ്കിൽ അല്പം കഴിഞ്ഞ് വീണ്ടും ശ്രമിക്കുക
        if (!document.body || !document.head) {
            setTimeout(initMenu, 100);
            return;
        }

        // 1. CSS Styles
        const style = document.createElement('style');
        style.innerHTML = `
            .dilshu-menu-btn {
                position: fixed; top: 20px; left: 20px;
                display: grid; grid-template-columns: repeat(3, 4px); gap: 3px;
                cursor: pointer; padding: 12px; background: white; border-radius: 50%;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2); z-index: 10000;
            }
            .dilshu-menu-btn span { width: 4px; height: 4px; background: #5f6368; border-radius: 50%; }
            
            #dilshu-dialog {
                display: none; position: fixed; left: 20px; top: 70px;
                width: 280px; background: white; border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2); z-index: 9999; padding: 15px;
                border: 1px solid #eee; font-family: Arial, sans-serif;
            }
            .menu-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; }
            .item { padding: 10px; text-decoration: none; color: #3c4043; border-radius: 8px; transition: 0.2s; display: block; }
            .item:hover { background-color: #f8f9fa; }
            .item img { width: 35px; height: 35px; margin-bottom: 5px; }
            .item span { display: block; font-size: 11px; }
        `;
        document.head.appendChild(style);

        // 2. HTML Structure
        const menuHTML = `
            <div class="dilshu-menu-btn" id="dilshuBtn">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
            </div>
            <div id="dilshu-dialog">
                <div class="menu-container">
                    <a href="https://wa.me/918592829157" target="_blank" class="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"> <span>WhatsApp</span>
                    </a>
                    <a href="https://dilshu.github.io/my_shop/" target="_blank" class="item">
                        <img src="https://cdn-icons-png.flaticon.com/128/869/869636.png"> <span>My Shop</span>
                    </a>
                    <a href="https://dilshu.github.io/booking" target="_blank" class="item">
                        <img src="https://cdn-icons-png.flaticon.com/128/17913/17913712.png"> <span>Booking</span>
                    </a>
                    <a href="https://dilshu.github.io/vcard" target="_blank" class="item">
                        <img src="https://cdn-icons-png.flaticon.com/128/15229/15229878.png"> <span>Vcard</span>
                    </a>
                    <a href="https://github.com/dilshu" target="_blank" class="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"> <span>GitHub</span>
                    </a>
                </div>
            </div>
        `;

        const wrapper = document.createElement('div');
        wrapper.innerHTML = menuHTML;
        document.body.appendChild(wrapper);

        const btn = document.getElementById('dilshuBtn');
        const dialog = document.getElementById('dilshu-dialog');

        if(btn && dialog) {
            btn.onclick = (e) => {
                dialog.style.display = dialog.style.display === 'block' ? 'none' : 'block';
                e.stopPropagation();
            };

            window.addEventListener('click', (event) => {
                if (!dialog.contains(event.target) && event.target !== btn) {
                    dialog.style.display = 'none';
                }
            });
        }
    };

    // പേജ് ലോഡ് ആകുമ്പോൾ ഫങ്ക്ഷൻ പ്രവർത്തിപ്പിക്കുക
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMenu);
    } else {
        initMenu();
    }
})();