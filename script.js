document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loginTrigger = document.getElementById('login-trigger');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    const heroSection = document.getElementById('hero');
    const productGrid = document.getElementById('product-grid');
    const dashboard = document.getElementById('dashboard');
    
    const trackShipmentBtn = document.getElementById('track-shipment-btn');
    const shippingTable = document.getElementById('shipping-table');

    // Sidebar Navigation Logic
    sidebarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // For demo: Show a console log of the switch
            console.log(`Switched to section: ${item.textContent.trim()}`);
        });
    });

    // Theme Toggle Logic
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        // Toggle icon
        themeToggle.innerHTML = isLight 
            ? `<i data-lucide="sun" style="width: 20px; height: 20px;"></i>` 
            : `<i data-lucide="moon" style="width: 20px; height: 20px;"></i>`;
        
        lucide.createIcons();
    });

    // Click 1: Open Login Modal
    loginTrigger.addEventListener('click', () => {
        loginModal.classList.add('show-flex');
    });

    // Close Modal Logic
    const hideModal = () => {
        loginModal.classList.remove('show-flex');
    };

    closeModal.addEventListener('click', hideModal);
    
    // Close on click outside the modal
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) hideModal();
    });

    // Click 2: Submit Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide UI elements
        hideModal();
        heroSection.classList.add('hidden');
        productGrid.classList.add('hidden');
        loginTrigger.classList.add('hidden');
        
        // Show Dashboard elements
        dashboard.classList.add('show-block');
        logoutBtn.classList.remove('hidden');
        
        // Set cookie
        document.cookie = "treadgizmo_demo_login=TRUE; path=/; max-age=3600";
        
        console.log('User logged in successfully. Cookie set.');
    });

    // Refresh Data Logic
    trackShipmentBtn.addEventListener('click', () => {
        // Show "refreshing" state
        const originalContent = trackShipmentBtn.innerHTML;
        trackShipmentBtn.innerHTML = `
            <span style="display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="loader-2" class="animate-spin" style="width: 14px;"></i> Refreshing...
            </span>
        `;
        lucide.createIcons();
        
        setTimeout(() => {
            trackShipmentBtn.innerHTML = originalContent;
            lucide.createIcons();
            console.log('Logistics data refreshed.');
        }, 800);
    });

    // Logout Functionality
    logoutBtn.addEventListener('click', () => {
        // Reset Visibility
        dashboard.classList.remove('show-block');
        if (shippingTable) shippingTable.classList.remove('show-block');
        logoutBtn.classList.add('hidden');
        
        heroSection.classList.remove('hidden');
        productGrid.classList.remove('hidden');
        loginTrigger.classList.remove('hidden');
        
        // Reset cookie
        document.cookie = "treadgizmo_demo_login=FALSE; path=/; max-age=3600";
        
        // Reset form
        loginForm.reset();
        
        console.log('User logged out. Cookie updated.');
    });
});
