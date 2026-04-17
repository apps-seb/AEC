import re

with open('index.html', 'r') as f:
    content = f.read()

# Replace flip cards section
search_pattern = r'<!-- Tarjeta 1 3D -->.*?<!-- Metodología Section -->'

replace_text = """<!-- Tarjeta 1 3D -->
                    <div class="flip-card perspective-1000 h-[320px] cursor-pointer">
                        <div class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                            <!-- Front Face -->
                            <div class="flip-card-front absolute w-full h-full backface-hidden">
                                <div class="absolute inset-0 bg-white rounded-[22px] shadow-xl overflow-hidden notch-bottom-right flex flex-col">
                                    <div class="h-48 bg-slate-100 overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop" alt="Trabajo comunitario" class="w-full h-full object-cover">
                                    </div>
                                    <div class="p-5 flex-grow flex flex-col justify-center">
                                        <h3 class="text-lg font-bold text-slate-800 pr-10 leading-tight">Nuestro compromiso como asociación</h3>
                                    </div>
                                </div>
                                <button class="flip-btn absolute bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white text-xl shadow-[0_4px_15px_rgba(56,189,248,0.5)] hover:scale-110 transition-transform z-10 pointer-events-none" aria-label="Ver más">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>

                            <!-- Back Face -->
                            <div class="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
                                <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-[22px] shadow-xl p-1 notch-bottom-right flex flex-col">
                                    <div class="bg-white rounded-[20px] h-full p-6 flex flex-col relative z-10">
                                        <h3 class="text-xl font-bold text-slate-800 mb-3 pr-8">Nuestro compromiso</h3>
                                        <p class="text-slate-600 text-sm leading-relaxed overflow-y-auto">
                                            Nos comprometemos a acciones especificas de reparación, como restitución, compensación, o trabajo comunitario a través de la asociación sin ánimo de lucro (Aso-Enlace Comunitario).
                                        </p>
                                    </div>
                                </div>
                                <button class="flip-btn absolute bottom-2 right-2 w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-blue-500 text-xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform z-10 pointer-events-none" aria-label="Volver">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Tarjeta 2 3D -->
                    <div class="flip-card perspective-1000 h-[320px] cursor-pointer">
                        <div class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                            <!-- Front Face -->
                            <div class="flip-card-front absolute w-full h-full backface-hidden">
                                <div class="absolute inset-0 bg-white rounded-[22px] shadow-xl overflow-hidden notch-bottom-right flex flex-col">
                                    <div class="h-48 bg-slate-100 overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop" alt="Comunidad escuchando" class="w-full h-full object-cover">
                                    </div>
                                    <div class="p-5 flex-grow flex flex-col justify-center">
                                        <h3 class="text-lg font-bold text-slate-800 pr-10 leading-tight">Escuchamos sus voces, honramos su verdad</h3>
                                    </div>
                                </div>
                                <button class="flip-btn absolute bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white text-xl shadow-[0_4px_15px_rgba(56,189,248,0.5)] hover:scale-110 transition-transform z-10 pointer-events-none" aria-label="Ver más">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>

                            <!-- Back Face -->
                            <div class="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
                                <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-[22px] shadow-xl p-1 notch-bottom-right flex flex-col">
                                    <div class="bg-white rounded-[20px] h-full p-6 flex flex-col relative z-10">
                                        <h3 class="text-xl font-bold text-slate-800 mb-3 pr-8">Honramos su verdad</h3>
                                        <p class="text-slate-600 text-sm leading-relaxed overflow-y-auto">
                                            Creamos espacios seguros para el diálogo y la escucha activa, reconociendo el valor de cada experiencia y perspectiva en nuestro camino compartido hacia la reconciliación comunitaria.
                                        </p>
                                    </div>
                                </div>
                                <button class="flip-btn absolute bottom-2 right-2 w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-blue-500 text-xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform z-10 pointer-events-none" aria-label="Volver">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Metodología Section -->"""

new_content = re.sub(search_pattern, replace_text, content, flags=re.DOTALL)

with open('index.html', 'w') as f:
    f.write(new_content)

print("Cards updated in index.html")
