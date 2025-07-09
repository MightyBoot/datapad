
// Smooth scrolling function
function scrollToOffers() {
    document.getElementById('offers').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add loading animation to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to animate elements on page load
    const animatedElements = document.querySelectorAll('.hero-content, .offerwall-container, .feature-card, .balance-card, .recent-activity');
    
    animatedElements.forEach((element, index) => {
        element.classList.add('loading');
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Update balance with animation (simulated)
    updateBalance();
    
    // Add click handlers for navigation
    setupNavigation();
    
    // Add some interactive effects
    addInteractiveEffects();
});

// Simulated balance update
function updateBalance() {
    const balanceElement = document.querySelector('.amount');
    if (balanceElement) {
        let currentBalance = 0;
        const targetBalance = 15.00; // Welcome bonus
        const increment = 0.5;
        
        const balanceInterval = setInterval(() => {
            if (currentBalance >= targetBalance) {
                clearInterval(balanceInterval);
                return;
            }
            
            currentBalance += increment;
            balanceElement.textContent = currentBalance.toFixed(2);
        }, 100);
    }
}

// Setup navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 30px rgba(255, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Simulate offerwall interactions
    simulateOfferwallActivity();
}

// Simulate offerwall activity
function simulateOfferwallActivity() {
    const iframe = document.querySelector('.offerwall-iframe');
    if (iframe) {
        // You can add more sophisticated iframe interaction here
        console.log('Offerwall loaded and ready for integration');
    }
}

// Add a simple notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#00ff00' : '#ff0000'};
        color: #000;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Withdraw button functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('withdraw-btn')) {
        e.preventDefault();
        showNotification('Withdrawal feature coming soon!', 'info');
    }
});

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log(`
██████╗  █████╗ ████████╗ █████╗ ██████╗  █████╗ ██████╗ 
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗
██║  ██║███████║   ██║   ███████║██████╔╝███████║██║  ██║
██║  ██║██╔══██║   ██║   ██╔══██║██╔═══╝ ██╔══██║██║  ██║
██████╔╝██║  ██║   ██║   ██║  ██║██║     ██║  ██║██████╔╝
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═════╝ 

Welcome to Datapad - Your Crypto Earning Platform!
Ready for deployment to GitHub Pages and Monlix submission.
`);
