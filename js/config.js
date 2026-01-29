/* ============================================
   REVEAL.JS CONFIGURATION
   ULTIMA 9.0 Presentation
   ============================================ */

Reveal.initialize({
    // Display configuration
    width: 1920,
    height: 1080,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    
    // Navigation controls
    controls: true,
    controlsTutorial: true,
    controlsLayout: 'bottom-right',
    controlsBackArrows: 'faded',
    
    // Progress bar
    progress: true,
    
    // Slide number
    slideNumber: 'c/t', // current/total
    showSlideNumber: 'all',
    
    // Transition
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
    backgroundTransition: 'fade',
    
    // Navigation behavior
    loop: false,
    shuffle: false,
    rtl: false,
    navigationMode: 'default', // default/linear/grid
    
    // Fragment behavior
    fragments: true,
    fragmentInURL: true,
    
    // History
    history: true,
    hashOneBasedIndex: false,
    respondToHashChanges: true,
    
    // Keyboard navigation
    keyboard: true,
    keyboardCondition: null,
    
    // Touch navigation
    touch: true,
    
    // Overview mode (press ESC)
    overview: true,
    
    // Auto-slide (disabled)
    autoSlide: 0,
    autoSlideStoppable: true,
    
    // Mouse wheel navigation
    mouseWheel: false,
    
    // Help overlay (press ?)
    help: true,
    
    // Pause on help overlay
    pauseOnHelp: true,
    
    // PDF export
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,
    
    // Plugins
    plugins: []
});

/* ============================================
   CUSTOM EVENT LISTENERS
   ============================================ */

// Log slide changes (useful for analytics)
Reveal.on('slidechanged', event => {
    console.log('Slide changed:', event.indexh);
});

// Ready event
Reveal.on('ready', event => {
    console.log('Presentation ready');
    console.log('Total slides:', Reveal.getTotalSlides());
});

/* ============================================
   KEYBOARD SHORTCUTS INFO
   ============================================ */

/*
    NAVIGATION:
    - Arrow keys: Navigate slides
    - Space: Next slide
    - Shift + Space: Previous slide
    - ESC: Overview mode
    - F: Fullscreen
    - S: Speaker notes (if enabled)
    - ?: Help overlay
    
    TIPS:
    - Use ESC to see all slides at once
    - Use F for fullscreen mode
    - Use arrow keys for precise navigation
*/
