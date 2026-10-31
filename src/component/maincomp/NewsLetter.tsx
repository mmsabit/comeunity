import { MdMarkEmailRead,  } from 'react-icons/md';

const NewsLetter = () => {
    return (
        <section className="w-full py-space-xl bg-surface-container-lowest">
                    <div className="max-w-5xl mx-auto px-margin">
                      <div className="p-8 sm:p-12 rounded-2xl bg-surface-container-low shadow-sm relative overflow-hidden">
                        {/* Background subtle decorative accents */}
                        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="absolute -left-12 -top-12 w-64 h-64 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                          <div className="w-16 h-16 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm shrink-0">
                            <MdMarkEmailRead className="text-[36px]" />
                          </div>
        
                          <div className="flex-1 text-center md:text-left">
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                              Stay Rooted in Your Community
                            </h2>
                            <p className="mt-2 font-body-md text-body-md text-on-surface-variant max-w-xl">
                              Subscribe for curated weekly dispatches on upcoming service opportunities, volunteer grant announcements, and inspiring neighborhood impact stories.
                            </p>
        
                            <form className="mt-6 flex flex-col sm:flex-row items-center gap-3" >
                              
                                <div className="w-full flex flex-col sm:flex-row items-center gap-3" id="newsletter-form-fields">
                                  <input
                                    className="w-full sm:max-w-md px-4 py-3 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm"
                                    
                                    placeholder="Enter your email address..."
                                    required
                                    type="email"
                                  />
                                  <button
                                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary-container hover:bg-primary text-white font-label-md text-label-md font-semibold transition-all whitespace-nowrap shadow-sm"
                                    type="submit"
                                  >
                                    Subscribe to Updates
                                  </button>
                                </div>
                              
                            </form>
        
                            <p className="mt-3 font-caption text-caption text-on-surface-variant">
                              Zero spam. Verified municipal notifications only. Unsubscribe anytime with one click.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
    );
};

export default NewsLetter;