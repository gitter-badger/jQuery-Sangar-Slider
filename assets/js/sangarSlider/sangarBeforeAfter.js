var sangarBeforeAfter;

;(function($) {

	sangarBeforeAfter = function(base, opt) {

        /**
         * Function: onInit
         */
        this.onInit = function()
        {
            opt.onInit();
        }


        /**
         * Function: onReset
         */
        this.onReset = function()
        {
            base.setupSizeAndCalculateHeightWidth(); // setup size after scaling
            base.setCurrentSlide(true); // reset current slide
            base.setupShowAllSlide() // if opt.showAllSlide is true
            base.initOutsideTextboxDimension(); // set outside container dimension
            base.playVideo(); // play video on first slide if exist
            base.setOutsideTextbox(); // set outside textbox if it defined
            base.setTimerWidth(); // reset timer width
            base.setBulletPosition() // reset bullet position
            base.setOutsideTextbox(); // set outside textbox if it defined
            base.setActiveExternalPagination() // set class active to external pagination
            base.setContentHeight() // set content css height base on its own

            // Fit the container height & width
            var wrapWidth = base.$sangarWrapper.width();
            var wrapHeight = base.$sangarWrapper.height();

            if(opt.autoResizeContainer)
            {
                setTimeout(function() {
                    base.$el.parent().css({
                        'min-width': wrapWidth + 'px',
                        'min-height': wrapHeight + 'px'
                    });
                }, 100);
            }

            opt.onReset(wrapWidth,wrapHeight);                
        }


        /**
         * Function: beforeLoading
         */
        this.beforeLoading = function()
        {
            opt.beforeLoading();
        }


        /**
         * Function: afterLoading
         */
        this.afterLoading = function()
        {
            base.animateContent(true); // animate content if contentAnimation is true
            base.startTimer();

            opt.afterLoading();
        }


		/**
         * Function: beforeSlideChange
         */
        this.beforeSlideChange = function()
        {
            opt.beforeChange(base.activeSlide);
        }
        

        /**
         * Function: afterSlideChange
         */
        base.afterSlideChange = function()
        {
            base.playVideo(); // play current video if exist                        
            base.setOutsideTextbox(); // set outside textbox if it defined
            base.setActiveExternalPagination(); // set class active to external pagination
            base.animateContent(); // animate content if contentAnimation is true

            opt.afterChange(base.activeSlide);
        }
    }

})(jQuery);