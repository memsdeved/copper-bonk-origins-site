
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-amber-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg text-copper">$COPPER</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#truth" className="text-gray-700 hover:text-copper transition-colors">The Truth</a>
            <a href="#why" className="text-gray-700 hover:text-copper transition-colors">Why $COPPER</a>
            <a href="#token" className="text-gray-700 hover:text-copper transition-colors">Token Info</a>
            <a href="#community" className="text-gray-700 hover:text-copper transition-colors">Community</a>
            <a href="#faq" className="text-gray-700 hover:text-copper transition-colors">FAQ</a>
          </div>
          
          <Button className="bg-copper hover:bg-amber-600 text-white">Buy $COPPER</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-amber-400/20 blur-3xl"></div>
          <div className="absolute right-1/3 bottom-0 w-96 h-96 rounded-full bg-copper/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Impact'] leading-tight">
              THE BONK DOG WAS <span className="bg-gradient-to-r from-copper to-amber-500 bg-clip-text text-transparent">NEVER CHEEMS...</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 font-['Comic_Sans_MS'] text-gray-600">
              Meet Copper — the Shiba who ate a scorpion and became legend.
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-copper hover:bg-amber-600 text-white" size="lg">
                Buy $COPPER
              </Button>
              <Button variant="outline" className="border-copper text-copper hover:bg-copper/10" size="lg">
                Join Community
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-300/30 rounded-full blur-xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-copper/30 overflow-hidden animate-[bounce_5s_ease-in-out_infinite] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-amber-400/20"></div>
                <img 
                  src="https://place-hold.it/400x400/b87333/ffffff&text=COPPER" 
                  alt="Copper the legendary Shiba" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Uncovered */}
      <section id="truth" className="py-20 bg-white/60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            <span className="bg-gradient-to-r from-copper to-amber-500 bg-clip-text text-transparent">THE TRUTH</span> UNCOVERED
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative pl-10 pb-10 border-l-2 border-copper">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-copper"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-copper">2016 — The Beginning</h3>
                <p className="text-gray-600 mt-2">
                  A young Shiba named Copper encounters a scorpion in her backyard.
                  Curiosity gets the better of her, and she gets stung. The first meme is born.
                </p>
              </div>
            </div>
            
            <div className="relative pl-10 pb-10 border-l-2 border-copper">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-copper"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-copper">2017 — Viral Fame</h3>
                <p className="text-gray-600 mt-2">
                  The image of Copper post-sting spreads across Tumblr and Reddit.
                  Her swollen face captures the internet's heart.
                </p>
                <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 italic">
                  "The original 'Bonk' meme featured a Shiba Inu named Copper who had been stung by a scorpion, 
                  not the commonly misattributed 'Cheems' character."
                  <div className="text-sm text-gray-500 mt-2">— KnowYourMeme Archive, 2018</div>
                </div>
              </div>
            </div>
            
            <div className="relative pl-10 border-l-2 border-copper">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-copper"></div>
              <div className="ml-8">
                <h3 className="text-xl font-bold text-copper">2022 — The Cover-up</h3>
                <p className="text-gray-600 mt-2">
                  As 'Bonk' emerges as a Solana memecoin, history is rewritten.
                  Copper's legacy is obscured, replaced by Cheems.
                </p>
                <div className="mt-4 flex justify-center">
                  <Button className="bg-copper text-white hover:bg-amber-600">
                    View Archive Evidence
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why $COPPER */}
      <section id="why" className="py-20 bg-amber-50/60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            WHY <span className="bg-gradient-to-r from-copper to-amber-500 bg-clip-text text-transparent">$COPPER</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-copper text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">It's meme history on-chain.</h3>
                <p className="text-gray-600">
                  $COPPER restores the true origin story of the internet's favorite Shiba.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-copper text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cheems was a cover story. Copper is the truth.</h3>
                <p className="text-gray-600">
                  The internet deserves to know the real story behind the legendary meme.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-copper text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Low cap, high vibes.</h3>
                <p className="text-gray-600">
                  Join a community that values authenticity, humor, and the true spirit of meme culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Token Info */}
      <section id="token" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            TOKEN <span className="bg-gradient-to-r from-copper to-amber-500 bg-clip-text text-transparent">INFO</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-amber-100 pb-3">
                <span className="font-semibold">Token Name</span>
                <span>Copper: Origins of Bonk ($COPPER)</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-amber-100 pb-3">
                <span className="font-semibold">Network</span>
                <span>Solana</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-amber-100 pb-3">
                <span className="font-semibold">Token Address</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2 font-mono">Cft3gDDE72M833wN1C6rZgJLjse1X2EXMUgXVVfcbonk</span>
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1 h-auto border-copper text-copper">
                    Copy
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button className="bg-copper hover:bg-amber-600 text-white">
                Buy on letsbonk.fun
              </Button>
              <Button variant="outline" className="border-copper text-copper">
                View on Solscan
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-copper transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-copper transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-copper transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Callout */}
      <section id="community" className="py-20 bg-copper/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Impact']">
              <span className="bg-gradient-to-r from-copper to-amber-500 bg-clip-text text-transparent">COPPER'S</span> LEGACY
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg">
                We tried to contact Bonk core. <strong>They ignored us.</strong>
              </p>
              <p className="text-lg">
                So we minted Copper ourselves.
              </p>
              <p className="text-xl font-bold text-copper">
                Let's give her the legacy she deserves.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-copper hover:bg-amber-600 text-white">
                Join Telegram
              </Button>
              <Button variant="outline" className="border-copper text-copper">
                Follow on X
              </Button>
              <Button variant="outline" className="border-copper text-copper">
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['Impact']">
            <span className="bg-gradient-to-r from-copper to-amber-500 bg-clip-text text-transparent">FREQUENTLY</span> ASKED QUESTIONS
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-amber-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-amber-50">
                  Is this a joke?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes. And also no. Copper is both a fun meme coin and a serious attempt to reclaim the true history of one of the internet's most beloved memes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-amber-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-amber-50">
                  Is Copper real?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes. She's on Tumblr, stung but unbroken. The original image that sparked the meme was a real Shiba Inu who was stung by a scorpion.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-amber-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-amber-50">
                  Is this official Bonk?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  It's the original Bonk. While not affiliated with the current Bonk token team, $COPPER represents the true origin story of the meme that inspired it all.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-amber-900 text-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span>$COPPER: Origins of Bonk</span>
            </div>
            
            <div className="text-sm text-amber-300">
              &copy; 2025 Copper Community. This is not financial advice.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
