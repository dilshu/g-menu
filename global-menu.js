/* global-menu.js */
(function() {
    const initMenu = function() {
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
                cursor: pointer; padding: 12px; 
                background: transparent; /* ആദ്യം ട്രാൻസ്പരന്റ് ആക്കി */
                border-radius: 50%;
                z-index: 10000;
                transition: background 0.3s, box-shadow 0.3s; /* സ്മൂത്ത് ആയി മാറാൻ */
            }
            
            /* ക്ലിക്ക് ചെയ്യുമ്പോൾ വൈറ്റ് ബാക്ക്ഗ്രൗണ്ട് വരാനുള്ള ക്ലാസ്സ് */
            .dilshu-menu-btn.active {
                background: white; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
                    <a href="https://wa.me/971551618462" target="_blank" class="item">
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
                    <a href="https://dilshu.github.io/docbuilder/" target="_blank" class="item">
                        <img src="https://cdn-icons-png.flaticon.com/128/9746/9746243.png"> <span>DocBuilder</span>
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
                const isOpen = dialog.style.display === 'block';
                dialog.style.display = isOpen ? 'none' : 'block';
                
                // ബട്ടണിന്റെ ബാക്ക്ഗ്രൗണ്ട് മാറ്റാൻ 'active' ക്ലാസ്സ് ഉപയോഗിക്കുന്നു
                if (isOpen) {
                    btn.classList.remove('active');
                } else {
                    btn.classList.add('active');
                }
                
                e.stopPropagation();
            };

            window.addEventListener('click', (event) => {
                if (!dialog.contains(event.target) && event.target !== btn) {
                    dialog.style.display = 'none';
                    btn.classList.remove('active'); // പുറത്ത് ക്ലിക്ക് ചെയ്യുമ്പോൾ വൈറ്റ് ബാക്ക്ഗ്രൗണ്ട് മാറ്റുന്നു
                }
            });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMenu);
    } else {
        initMenu();
    }
})();