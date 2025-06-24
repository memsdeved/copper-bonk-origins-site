import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, X, ExternalLink } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-bonk-background text-bonk-text">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-bonk-light/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bonk rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg text-bonk">$COPPER</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#truth" className="text-bonk-text hover:text-bonk transition-colors">The Truth</a>
            <a href="#why" className="text-bonk-text hover:text-bonk transition-colors">Why $COPPER</a>
            <a href="#token" className="text-bonk-text hover:text-bonk transition-colors">Token Info</a>
            <a href="#community" className="text-bonk-text hover:text-bonk transition-colors">Community</a>
            <a href="#faq" className="text-bonk-text hover:text-bonk transition-colors">FAQ</a>
          </div>
          
          <Button className="bg-bonk hover:bg-bonk-dark text-white">
            <a href="https://letsbonk.fun/token/Cft3gDDE72M833wN1C6rZgJLjse1X2EXMUgXVVfcbonk" target="_blank" rel="noopener noreferrer">
              $COPPER on Letsbonk.fun
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-bonk-light/20 blur-3xl"></div>
          <div className="absolute right-1/3 bottom-0 w-96 h-96 rounded-full bg-bonk/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Impact'] leading-tight">
              THE BONK DOG WAS <span className="bg-gradient-to-r from-bonk to-bonk-accent bg-clip-text text-transparent">NEVER CHEEMS...</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 font-['Comic_Sans_MS'] text-bonk-text/70">
              Meet Copper — the Shiba who ate a scorpion and became legend.
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-bonk hover:bg-bonk-dark text-white" size="lg">
                <a href="https://letsbonk.fun/token/Cft3gDDE72M833wN1C6rZgJLjse1X2EXMUgXVVfcbonk" target="_blank" rel="noopener noreferrer">
                  $COPPER on Letsbonk.fun
                </a>
              </Button>
              <Button variant="outline" className="border-bonk text-bonk hover:bg-bonk/10" size="lg">
                Join Community
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-bonk-accent/30 to-bonk-light/30 blur-xl"></div>
              <div className="relative border-4 border-bonk/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bonk/20 to-bonk-light/20"></div>
                <img 
                  src="/lovable-uploads/fdb9d5c4-cc75-48e5-854e-bed25b898134.png" 
                  alt="Copper the legendary Shiba after eating a scorpion" 
                  className="w-full h-full object-cover"
                />
                <a 
                  href="https://didlo.tumblr.com/post/141608769796/she-ate-a-scorpion"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 px-2 flex items-center justify-center hover:bg-black/90 transition-colors"
                >
                  <span>Original Post</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Uncovered */}
      <section id="truth" className="py-20 bg-white/60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            <span className="bg-gradient-to-r from-bonk to-bonk-accent bg-clip-text text-transparent">THE TRUTH</span> UNCOVERED
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative pl-10 pb-10 border-l-2 border-bonk">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-bonk"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-bonk">2016 — The Beginning</h3>
                <p className="text-bonk-text/70 mt-2">
                  A young Shiba named Copper encounters a scorpion in her backyard.
                  Curiosity gets the better of her, and she gets stung. The first meme is born.
                </p>
              </div>
            </div>
            
            <div className="relative pl-10 pb-10 border-l-2 border-bonk">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-bonk"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-bonk">2017 — Viral Fame</h3>
                <p className="text-bonk-text/70 mt-2">
                  The image of Copper post-sting spreads across Tumblr and Reddit.
                  Her swollen face captures the internet's heart.
                </p>
                <div className="mt-4 p-4 bg-bonk-light/20 border-l-4 border-bonk-accent italic">
                  "The original 'Bonk' meme featured a Shiba Inu named Copper who had been stung by a scorpion, 
                  not the commonly misattributed 'Cheems' character."
                  <div className="text-sm text-bonk-text/50 mt-2">— KnowYourMeme Archive, 2018</div>
                </div>
              </div>
            </div>
            
            <div className="relative pl-10 pb-10 border-l-2 border-bonk">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-bonk"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-bonk">2022 — The Cover-up</h3>
                <p className="text-bonk-text/70 mt-2">
                  As 'Bonk' emerges as a Solana memecoin, history is rewritten.
                  Copper's legacy is obscured, replaced by Cheems.
                </p>
              </div>
            </div>
            
            <div className="relative pl-10 border-l-2 border-bonk">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-bonk"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-bonk">2025 — KYM Confirms the Truth</h3>
                <p className="text-bonk-text/70 mt-2">
                  Official confirmation! KnowYourMeme updates their Bonk entry to 
                  acknowledge Copper as the true origin of the Bonk meme, citing the March 24th, 2016 post 
                  by user "didlo" showing their dog named Copper with a swollen face after being stung by a scorpion.
                </p>
                
                {/* Updated KYM screenshot */}
                <div className="mt-4 mb-4 mx-auto max-w-lg border-2 border-bonk-light rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/d560b615-cfa2-4a27-9a5a-82d9b3b2b26a.png" 
                    alt="KnowYourMeme update showing Copper as the true origin of Bonk" 
                    className="w-full"
                  />
                  <div className="bg-bonk-light/20 p-3 text-sm text-bonk-text/70 italic">
                    Screenshot: KnowYourMeme acknowledges Copper as Bonk's origin
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <a 
                    href="https://knowyourmeme.com/memes/bonk-cheems" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bonk hover:underline"
                  >
                    Don't believe? Check yourself
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button className="bg-bonk text-white hover:bg-bonk-dark">
                View Archive Evidence
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why $COPPER */}
      <section id="why" className="py-20 bg-bonk-light/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            WHY <span className="bg-gradient-to-r from-bonk to-bonk-accent bg-clip-text text-transparent">$COPPER</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border border-bonk-light/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bonk-light/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-bonk text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">It's meme history on-chain.</h3>
                <p className="text-bonk-text/70">
                  $COPPER restores the true origin story of the internet's favorite Shiba.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border border-bonk-light/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bonk-light/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-bonk text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cheems was a cover story. Copper is the truth.</h3>
                <p className="text-bonk-text/70">
                  The internet deserves to know the real story behind the legendary meme.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border border-bonk-light/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bonk-light/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-bonk text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Low cap, high vibes.</h3>
                <p className="text-bonk-text/70">
                  Join a community that values authenticity, humor, and the true spirit of meme culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Token Info */}
      <section id="token" className="py-20 bg-gradient-to-b from-white to-bonk-light/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            TOKEN <span className="bg-gradient-to-r from-bonk to-bonk-accent bg-clip-text text-transparent">INFO</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-bonk-light/30 rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-bonk-light/20 pb-3">
                <span className="font-semibold">Token Name</span>
                <span>Copper: Origins of Bonk ($COPPER)</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-bonk-light/20 pb-3">
                <span className="font-semibold">Network</span>
                <span>Solana</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-bonk-light/20 pb-3">
                <span className="font-semibold">Token Address</span>
                <div className="flex items-center">
                  <span className="text-sm text-bonk-text/70 mr-2 font-mono">Cft3gDDE72M833wN1C6rZgJLjse1X2EXMUgXVVfcbonk</span>
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1 h-auto border-bonk text-bonk">
                    Copy
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button className="bg-bonk hover:bg-bonk-dark text-white">
                <a href="https://letsbonk.fun/token/Cft3gDDE72M833wN1C6rZgJLjse1X2EXMUgXVVfcbonk" target="_blank" rel="noopener noreferrer">
                  $COPPER on Letsbonk.fun
                </a>
              </Button>
              <Button variant="outline" className="border-bonk text-bonk">
                View on Solscan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Callout - Modified to only show X community */}
      <section id="community" className="py-20 bg-bonk/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Impact']">
              <span className="bg-gradient-to-r from-bonk to-bonk-accent bg-clip-text text-transparent">COPPER'S</span> LEGACY
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg">
                We tried to contact Bonk core. <strong>They ignored us.</strong>
              </p>
              <p className="text-lg">
                So we minted Copper ourselves.
              </p>
              <p className="text-xl font-bold text-bonk">
                Let's give her the legacy she deserves.
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://x.com/i/communities/1922047164974264701" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="bg-bonk hover:bg-bonk-dark text-white flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Join X Community
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            <span className="bg-gradient-to-r from-bonk to-bonk-accent bg-clip-text text-transparent">FREQUENTLY</span> ASKED QUESTIONS
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-bonk-light/30 rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-bonk-light/10">
                  Is this a joke?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-bonk-text/70">
                  Yes. And also no. Copper is both a fun meme coin and a serious attempt to reclaim the true history of one of the internet's most beloved memes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-bonk-light/30 rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-bonk-light/10">
                  Is Copper real?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-bonk-text/70">
                  Yes. She's on Tumblr, stung but unbroken. The original image that sparked the meme was a real Shiba Inu who was stung by a scorpion.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-bonk-light/30 rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-bonk-light/10">
                  Is this official Bonk?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-bonk-text/70">
                  It's the original Bonk. While not affiliated with the current Bonk token team, $COPPER represents the true origin story of the meme that inspired it all.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-bonk-dark text-bonk-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-bonk rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span>$COPPER: Origins of Bonk</span>
            </div>
            
            <div className="text-sm text-bonk-light/70">
              &copy; 2025 Copper Community. This is not financial advice.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
