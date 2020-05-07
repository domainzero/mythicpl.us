$(function () {

    var dict = {

        //===== HOME =====
        //Page title
        "what m+ garbage do i have to deal with this week?": {
            es: "¿Cuáles son mis retos en míticas+?",
            pt: "Quais são os desafios em míticas+?"
        },

        "what garbage affixes do i have to deal with this week?": {
            es: "¿Cuáles son los retos a los que me enfrentaré esta semana en mi mítica+?",
            pt: "Quais são os desafios que vou enfrentar esta semana em míticas+?"
        },

        "Affixes:": {
            es: "Afijos:",
            pt: "Afixos:"
        },

        "<span class=\"hard\">Tyrannical</span> and <span class=\"hard\">Fortified</span> changes: <span class=\"hard\">Tyrannical</span> and <span class=\"hard\">Fortified</span> are now keystone level 2 affixes meaning one will always appear on a keystone. The damage/health scaling comes out to be roughly the same at +10 as it was before.": {
            es: "<span class=\"hard\">Tiránica</span> y <span class=\"hard\">Reforzada</span>: Ahora son afijos de nivel 2, lo que significa que siempre aparecerá en una piedra angular. El daño y salud de los enemigos escala más o menos de la misma forma.",
            pt: "<span class=\"hard\">Tirânica</span> e <span class=\"hard\">Fortificada</span>: Agora são afixos de nível 2, com esta mudança podemos apreciar em todas as pedras-chave mítica este afixo. O dano/vida dos inimigos escala mais ou menos da mesma forma."
        },

        "<strong>New affixes:</strong> In addition to other new affixes, Battle for Azeroth is introducing \"seasonal affixes\", a fourth affix that will be applied to a keystone for the duration of a mythic plus season. The first seasonal affix that is live on the BfA beta is called <a href=\"http://bfa.wowhead.com/affix=16/infested\">Infested</a>.": {
            es: "<strong>Nuevos afijos:</strong> Además de los afijos existentes, Battle for Azeroth está introduciendo los \"afijos de temporada\", un cuarto afijo que se aplicará a una piedra angular mítica mientras dure una temporada de míticas plus partiendo de la dificultad +10. El primer afijo de temporada se llama <a href=\"http://bfa.wowhead.com/affix=16/infested\">Infestado</a>.",
            pt: "<strong>Novos afixos:</strong> Além dos afixos existentes, Battle for Azeroth introduz os \"afixos de temporada\", um quarto afixo se aplicará´em uma pedra-chave mítica enquanto dure uma temporada de míticas plus a partir do nível 10 de dificuldade. O primeiro afixo de temporada se chama <a href=\"http://bfa.wowhead.com/affix=16/infested\">Infestada</a>."
        },

        "Gear restrictions:": {
            es: "Restricción de gear:",
            pt: "Restrição de gear:"
        },

        "You are now unable to swap gear after a keystone run has begun (once the timer has started).": {
            es: "Ahora no podrás cambiar la equipación una vez que que la mítica plus haya empezado.",
            pt: "Agora você não pode mudar seus equipamentos uma vez indicada a mazmorra mítica plus."
        },

        "Threat changes:": {
            es: "Cambios en la amenaza:",
            pt: "Mudanças de aggro:"
        },

        "Threat generation from tanks is now greatly reduced. Some enemies will drop threat throughout encounters.": {
            es: "La generación de amenaza de los tanques ahora se reduce enormemente. Algunos enemigos podrán perder la amenaza durante los encuentros.",
            pt: "A geraçao de aggro dos tanques agora foi amplamente reduzida. Alguns inimigos irão perder aggro durante os encontros."
        },

        "Weekly chest loot adjustment:": {
            es: "Ajustes en el botín semanal:",
            pt: "Mudanças no loot semanal:"
        },

        "The end-of-week chest will now contain one piece of gear, either dungeon loot or Azerite armor. It will still contain Azerite.": {
            es: "El cofre semanal ahora contendrá una única pieza de equipo, ya sea un botín de mazmorra o un item de Azerita. En las mazmorras con piedra angular mítica no podrás obtener una pieza de azerita, sin embargo puedes conseguirla en una mazmorra mítica (+0) sin piedra angular.",
            pt: "O cofre semanal agora irá conter um único equipamento, seja ele um loot de masmorra ou um item de Azerita. Nas masmorras com pedra-chave não poderás obter um item de azerita. Porém, é possível conseguir em uma masmorra mítica (+0) sem pedra angular."
        },

        "STATS": {
            es: "ESTADÍSTICAS",
            pt: "ESTATÍSTICAS"
        },

        "a raider.io and mythicpl.us collaboration": {
            es: "una colaboración de raider.io y mythicpl.us",
            pt: "com a colaboração de raider.io e mythicpl.us"
        },

        "Take a look back at all the juicy mythic plus stats from Legion": {
            es: "Pincha en el título y echa un vistazo a todas las jugosas estadísticas de las míticas plus desde Legion",
            pt: "Click no título para dar uma olhada nas deliciosas estatísitcas das míticas plus desde Legion"
        },

        "What is an \"affix\"?": {
            es: "¿Qué es un \"afijo\"?",
            pt: "O que é um afixo?"
        },

        "An affix is a modifier applied to a mythic keystone at set levels. Different combinations occur every week, with the combinations eventually repeating on a set schedule.": {
            es: "Un afijo es un modificador aplicado a una piedra angular mítica en niveles establecidos. Diferentes combinaciones ocurren cada semana, con las combinaciones eventualmente repitiéndose en un horario establecido.",
            pt: "Um afixo é um modificador aplicado a uma pedra-chave mítica em níveis estabelecidos. Diferentes combinações acontecem a cada semana, estas combinações eventualmente se repetem em dias e horários estabelecidos."
        },

        "Explaining affix difficulty": {
            es: "Explicando la dificultad los afijos",
            pt: "Explicando sobre a dificudade dos afixos"
        },

        "Affix difficulty ratings are <strong>crowdsourced</strong>, meaning they are assigned a difficulty based on user feedback. I will be rolling out a new survey when we've seen more of the affixes and how they play in the new dungeons.": {
            es: "Las calificaciones de dificultad de los afijos son basadas en <strong>colaboración</strong>, lo que significa que se les asigna una dificultad en función de los comentarios de los usuarios. Voy a lanzar una nueva encuesta cuando veamos más afijos y cómo se juegan en las nuevas mazmorras.",
            pt: "As qualificações de dificuldade dos afixos são baseadas em <strong>colaboração</strong>, isto significa que se assocíe uma dificuldade em função dos comentários dos usuários. Vou lançar uma nova enquete ao identificar mais enquetes e como atuam nas novas masmorras."
        },

        "(these occur on all keystones, alternating weekly)": {
            es: "(estos afijos salen en todas las piedras, y se alternan semanalmente)",
            pt: "(estes afixos aparecem em todas as pedra-chave e se alternam semanalmente)"
        },

        "(one affix will occur at +4 per week)": {
            es: "(un afijo semanal a partir de una piedra +4 por semana)",
            pt: "(um afixo semanal a partir de uma pedra +4)"
        },

        "(one affix will occur at +7 per week)": {
            es: "(un afijo semanal a partir de una piedra +7 por semana)",
            pt: "(um afixo semanal a partir de uma pedra +7)"
        },

        "(these occur on all keystones throughout the season at keystone level 10 and do not rotate weekly for the duration of the season)": {
            es: "(estos afijos ocurren en todas las piedras angulares a lo largo de la temporada en el nivel +10 y no rotan semanalmente durante esta temporada)",
            pt: "(estes afixos aparecem em todas as pedras-chave ao longo da temporada nas pedras-chave de nível +10 e não rotam semanalmente durante a temporada)"
        },

        "Changelog": {
            es: "Historial de cambios",
            pt: "Histórico de mudanças"
        },

        "1-31-2020: We up to date for Season 4! Thanks to everyone who contributed via Discord, GitHub, and email!": {
            es: "31-01-2020: Lo hemos actualizado para la cuarta temporada. ¡Muchas gracias a todos que contribuyeron via Discord, GitHub y correos!",
            pt: "31-01-2020: Atualizamos o site para a quarta temporada. Muito obrigado a todos que contribuiram por Discord, GitHub e e-mails!"
        },

        "2-12-2020: Forgot to mention a few changes:": {
            es: "12-02-2020: Se me pasó comentar algunos cambios:",
            pt: "12-02-2020: Esqueci de comentar algumas mudanças:"
        },

        "Streamlined page load (now pulls from a cached API call instead of forcing clients to call the raider.io API. I should have done this a long time ago, thanks for putting up with my shit, Jah!)": {
            es: "Optimización de la carga de la página (ahora inovca por una caché la API de raider.io en lugar de forzar los clientes a invocarla. Debería haberlo hecho hace rato, gracias por soportarlo.)",
            pt: "Otimização do carregamento da página (agora usa um cache da API de raider.io em vez de forçar a invocação no cliente. Deveria ter feito isto faz tempo, mas não. Obrigado por esperar a correção.) "
        },

        "Removed Google analytics/tracking! (I should have also done this a long time ago. Thanks for putting up with my shit, everyone!)": {
            es: "Removido tracking de Google Analytics (debería haberlo hecho hace rato. ¡Gracias a todos por soportarlo!)",
            pt: "Eliminados os trackings de Google Analytics (já deveria ter feito isto faz tempo. Obrigado por entender-lo)"
        },        

        "Filled out affix schedule.": {
            es: "Ajustado el calendario de afijos.",
            pt: "Ajustando o calendario de afixos"
        },

        "Lots of proofreading.": {
            es: "Muchas correciones",
            pt: "Muitos ajustes"
        },

        "Added group comp. section": {
            es: "Sección 'Consideraciones de grupo' añadida",
            pt: "Nova sessão 'Consideraçoes de grupo"
        },

        "Clarified examples": {
            es: "Aclaración de ejemplos",
            pt: "Melhor explicação nos exemplos"
        },

        "Fixed loot (shoutouts to Blake!)": {
            es: "Botín arreglado (¡gracias a Blake!)",
            pt: "Loot corrigido (obrigado Blake!"
        },

        "Fixed timers (shoutouts to Veana!)": {
            es: "Temporizadores arreglados (¡gracias a Veana!)",
            pt: "Temorizadores corrigidos (obrigado Veana!)"
        },

        "Noted that the multiple pieces of gear change was reverted": {
            es: "Apunte de que el botín de múltiples piezas se revirtieron",
            pt: "Nota de que o loot de múltiplos item foi revertido"
        },

        "New translations added.": {
            es: "Nuevas traducciones añadidas",
            pt: "Novas frases traduzidas"
        },

        "Graphs": {
            es: "Gráficos",
            pt: "Gráficos"
        },

        //Menu
        "Open Menu": {
            es: "Abrir menú",
            pt: "Abrir menu"
        },

        "Graphs": {
            es: "Gráficos",
            pt: "Gráficos"
        },
        "Calculator": {
            es: "Calculadora",
            pt: "Calculadora"
        },
        "Affixes": {
            es: "Afijos",
            pt: "Afixos"
        },
        "Resources": {
            es: "Recursos",
            pt: "Ferramentas"
        },
        "Timers": {
            es: "Tiempos",
            pt: "Tempos"
        },
        "Loot": {
            es: "Botín",
            pt: "Saqueio"
        },

        //Affixes list
        "Raging": {
            es: "Furibunda",
            pt: "Enraivecedora"
        },
        "Volcanic": {
            es: "Volcánica",
            pt: "Vulcânica"
        },
        "Teeming": {
            es: "Bullente",
            pt: "Apinhada"
        },
        "Explosive": {
            es: "Explosiva",
            pt: "Explosiva"
        },
        "Bolstering": {
            es: "Potenciante",
            pt: "Encorajadora"
        },
        "Grievous": {
            es: "Dolorosa",
            pt: "Atrocidade"
        },
        "Sanguine": {
            es: "Sanguina",
            pt: "Sanguínea"
        },
        "Bursting": {
            es: "Detonante",
            pt: "Explosivo"
        },
        "Necrotic": {
            es: "Necrótica",
            pt: "Necrótica"
        },
        "Skittish": {
            es: "Inquieta",
            pt: "Assustada"
        },
        "Quaking": {
            es: "Sísmica",
            pt: "Estremecendo"
        },
        "Tyrannical": {
            es: "Tiránica",
            pt: "Tirânica"
        },
        "Fortified": {
            es: "Reforzada",
            pt: "Fortificada"
        },
        "Infested": {
            es: "Infestado",
            pt: "Infestada"
        },
        "Reaping": {
            es: "Segadora",
            pt: "Ceifadora"
        },
	"Beguiling": {
	    es: "Cautivadora",
            pt: "Encantadora"
	},
	"Awakened": {
	    es: "Despierta",
            pt: "Desperto"
        },
        //Dungeons list
        "Atal'Dazar": {
            es: "Atal'Dazar",
            pt: "Atal'Dazar"
        },

        "Freehold": {
            es: "Fuerte Libre",
            pt: "Angra do Falcão"
        },

        "The MOTHERLODE!!": {
            es: "VETA MADRE",
            pt: "MEGAMINA!!!"
        },

        "Shrine of the Storm": {
            es: "Altar de la Tormenta",
            pt: "Santuário da Tempestade"
        },

        "Temple of Sethraliss": {
            es: "Templo de Sethraliss",
            pt: "Templo de Sethraliss"
        },

        "Tol Dagor": {
            es: "Tol Dagor",
            pt: "Tol Dagor"
        },

        "The Underrot": {
            es: "Catacumbas putrefactas",
            pt: "Terra podre"
        },

        "Waycrest Manor": {
            es: "Mansión Crestavía",
            pt: "Mansão Capelo"
        },

        "Kings' Rest": {
            es: "Reposo de los Reyes",
            pt: "Repouso do Rei"
        },

        "Siege of Boralus": {
            es: "Asedio de Boralus",
            pt: "Cerco de Boralus"
        },

        "Mechagon: Junkyard": {
            es: "Mecandria: Desguace",
            pt: "Operação: Gnomecan - Ferro-velho"
        },

        "Mechagon: Workshop": {
            es: "Mecandria: Taller",
            pt: "Operação: Gnomecan - Oficina"
        },

        //Weeks
        "This Week": {
            es: "Esta semana",
            pt: "Esta semana"
        },

        "Next week": {
            es: "Próxima semana",
            pt: "Próxima semana"
        },

        "Week after next": {
            es: "Semana contígua",
            pt: "Semana depois da próxima"
        },

        //Calculator
        "CALCULATOR": {
            es: "CALCULADORA",
            pt: "CALCULADORA"
        },

        "Calculate AP required to next artifact level and more!": {
            es: "¡Calcula el AP requerido para el siguiente nivel de artefacto y más!",
            pt: "Calcule o AP necessário para o próximo nível da arma de artefato e mais!"
        },

        //Affixes effects

        "Affix effects": {
            es: "Efectos de los afijos",
            pt: "Efeitos dos afixos"
        },

        "Legend: ": {
            es: "Dificultad: ",
            pt: "Dificuldade: "
        },

        "easy difficulty": {
            es: "Fácil",
            pt: "Baixa"
        },

        "medium difficulty": {
            es: "Media",
            pt: "Média"
        },

        "hard difficulty": {
            es: "Alta",
            pt: "Alta"
        },

        "Easy": {
            es: "Fácil",
            pt: "Baixa"
        },

        "Medium": {
            es: "Media",
            pt: "Média"
        },

        "Hard": {
            es: "Alta",
            pt: "Alta"
        },

        "HP and Damage scaling per keystone level": {
            es: "Escala de Salud y Daño por nivel de Piedra angular mítica",
            pt: "Escala de HP e Dano por nível de Pedra-chave mítica"
        },

        "Short survey to get your feedback on affix difficulty": {
            es: "Rellena la encuesta rápida (en inglés) para que tengamos tus opiniones sobre la dificultad de afijos",
            pt: "Preencha uma enquete rápida (em inglês) para que possamos ter um feedback sobre as dificuldades de afixos"
        },

        "Curious about how I applied the results? Check ": {
            es: "¿Interesado en saber cómo obtuve los resultados? Compruébalo ",
            pt: "Interessado em descubrir como obtive os resultados? Comprovar "
        },

        "here!": {
            es: "aquí!",
            pt: "aqui!"
        },

        "Level 2 affixes ": {
            es: "Nivel 2 - Afijos ",
            pt: "Nível 2 - Afixos "
        },

        "Level 4 affixes ": {
            es: "Nivel 4 - Afijos ",
            pt: "Nível 4 - Afixos "
        },

        "(these occur at +4 keystones)": {
            es: "(A partir de una piedra angular +4)",
            pt: "(desde uma pedra-chave +4)"
        },

        "Level 7 affixes ": {
            es: "Nivel 7 - Afijos ",
            pt: "Nível 7 - Afixos "
        },

        "(these occur at +7 keystones)": {
            es: "(A partir de una piedra angular +7)",
            pt: "(desde uma pedra-chave +7)"
        },

        "Seasonal affixes (+10)": {
            es: "Nivel 10 - Afijos de temporada",
            pt: "Nível 10 - Afixos sazonais"
        },

        "(these occur at +10 keystones)": {
            es: "(A partir de una piedra angular +10)",
            pt: "(desde uma pedra-chave +10)"
        },

        bolstering_info: {
            en: "Non-boss enemies will buff nearby allies' health and damage when defeated with a 30yd effective range.",
            es: "Cuando un enemigo que no es un jefe muere, su grito al morir potencia a los aliados cercanos, lo que aumenta su salud y su daño máximos un 20%. Radio del grito 30 metros.",
            pt: "Quando um inimigo que não é chefe morre, os aliados a 30 metros dele recebem um bônus que aumenta sua vida máxima e seu dano em 20%, e o efeito acumula."
        },

        bolstering_note: {
            en: "Note: it's important to kill all the trash in a pull as closely together as possible with this affix as mobs effectively heal as they gain max health (percent translation). Adds spawned from a trash mob or boss ability do not trigger bolster. It's possible to reset bolster on mobs by resetting them via wiping or exiting combat.",
            es: "Nota: Es importante intentar matar todo el pull a la vez para no potenciar a los enemigos cercanos. Los enemigos adicionales que aparecen en un combate contra un jefe de mazmorra no son afectados por la Potenciante.",
            pt: "Nota: É necessário tentar balancear o dano de forma que todos os inimigos morram juntos evitando potenciar os que estao ao redor. Os inimigos que aparecem junto com o chefe da masmorra não são afetados pela Encorajadora."
        },

        raging_info: {
            en: "Non-boss enemies will enrage at low health, dealing double damage until killed.",
            es: "Los enemigos que no son jefes se enfuceren cuando alcanzan un 30% de salud, por lo que infligen un 100% más de daño hasta que sean derrotados.",
            pt: "Os Inimigos que não são chefes ficam enfurecidos ao alcançar 30% de vida, causando 100% mais de dano até serem derrotados."
        },

        raging_note: {
            en: "Note: mobs with high damage targeted abilities or high damage AoE abilities become deadly with this affix. Be sure to focus fire mobs down so there aren't multiple enraged mobs at once.",
            es: "Nota: los enemigos con habilidades que hacen mucho daño AoE o daño directo son mortales con este afijo. Asegúrate de hacer bien el foco e intenta reservar los stuns y ccs cuando estén enfurecidos. Caso se curen después de enfurecerse, seguirán enfucecidos hasta que mueran.",
            pt: "Nota: inimigos com habilidades que causam muito dano em áreas ou direto são mortais com este afixo. Garanta que o foco principal esteja morto e guarde algum aturdir e cc para quando estiverem enfurecidos. Se os enemigos se curam depois de potenciar-se, seguirão potenciados até que morram."
        },

        sanguine_info: {
            en: "Shortly after death, non-boss enemies will leave a pool of blood on the ground, which grows to a 5yd radius over 2 seconds. This pool heals enemies and damages players for a % of their maximum health. The pool's radius is 8 yds.",
            es: "Al morir, los enemigos que no son jefes dejan debajo suyo un charco persistente de icor que sana a sus aliados e inflige daño a los jugadores.",
            pt: "Ao morrer, inimigos que não-chefes deixam debaixo uma poça de sangue que cura aos aliados e causa dano aos jogadores."
        },

        sanguine_note: {
            en: "Note: While this affix was mostly ignorable before, it has become a problem in some of the new close-quarters dungeons. In addition, there are a lot more caster-style mobs that will sit in the pools. Mass grips/knockbacks are valuable in Sanguine keys.",
            es: "Nota: afijo facilito :), no te quedes parado en los pulls y asegúrate de que los enemigos tampoco estén parados en el charco. ¡A moverse!",
            pt: "Nota: afixo facinho, facinho... Não fique parado nos mobs e mantenhase em movimento. Garanta que os inimigos também se movam. Movimento, movimento!"
        },

        teeming_info: {
            en: "Additional non-boss enemies are present throughout the dungeon; kill count requirement increased.",
            es: "Hay enemigos (no jefes) adicionales por toda la mazmorra.",
            pt: "Inimigos (não chefes) adicionais estão presentes na masmorra."
        },

        teeming_note: {
            en: "Note: Not much different from usual unless paired with other problematic affixes (Skittish). The most notable change with this affix is that the Enemy Forces Defeated kill requirement is increased. Certain trash pulls can be really nasty with this affix depending on the dungeon.",
            es: "Nota: No es muy relevante, al menos que esté emparejado con otros afijos problemáticos (Inquieta). El cambio más notable con este afijo es que el requisito de hacer porcentaje aumenta igual que las tropas. Ciertos pulls pueden ser realmente desagradables con este afijo dependiendo de la mazmorra.",
            pt: "Nota: Não é muito relevante, ao menos que esteja em conjunto com outros afixos problemáticos (Assustada). A mudança mais perceptível com este afixo é que o requisito de matar inimigos não-chefes aumenta. Alguns mobs podem ser realmente horríveis com este afixo dependendo da masmorra."
        },

        bursting_info: {
            en: "When slain, non-boss enemies explode, causing all players to suffer 5% of their maximum health in damage over 4 seconds. This effect stacks.",
            es: "Al morir, los enemigos que no son jefes explotan, por lo que todos los jugadores reciben un 10% de su salud máxima como daño durante 4 s. Este efecto se acumula.",
            pt: "Quando mortos, inimigos que não são chefes explodem, fazendo com que todos os jogadores recebam dano equivalente a 10% do máximo de pontos de vida ao longo de 4 s. Este efeito acumula."
        },

        bursting_note: {
            en: "Note: This effect stacks, so it is safest to let the stacks drop before killing multiple enemies.",
            es: "Nota: Este afijo parece que ignora el rango y columneo. Así que cuidado.",
            pt: "Nota: Este afixo parece que ignora o alcance. Portanto cuidado!"
        },

        necrotic_info: {
            en: "Enemy melee attacks apply a stacking debuff that deals damage and reduces healing received. Debuff lasts 9 seconds and is dispelled when exiting combat.",
            es: "Todos los ataques cuerpo a cuerpo de los enemigos aplican un añublo que se acumula, inflige daño en el tiempo y reduce la sanación recibida.",
            pt: "Todos os ataques corpo a corpo dos inimigos aplicam uma praga cumulativa que causa dano ao longo do tempo e reduz a cura recebida."
        },

        necrotic_note: {
            en: "Note: Strong AoE CC or slows are great for this affix to allow for kiting mobs while the tank's Necrotic stacks fall off.",
            es: "Nota: Está muy bien utilizar correctamente los CCs en áreas y ralentizaciones con este afijo para permitir kitear bien los pulls mientras el tanque se limpia de las cargas de Necrótica.",
            pt: "Nota: É importante utilizar corretamente os CCs de controle massivo e redução de velocidade dos inimigos para permitir que o tanque possa fugir. Desta forma ele pode limpar-se das cargas necróticas."
        },

        skittish_info: {
            en: "Tanks generate 75% less threat.",
            es: "Los enemigos prestan menos atención a la amenaza generada por los tanques.",
            pt: "Os inimigos dão muito menos atenção à ameaça gerada por tanques."
        },

        skittish_note: {
            en: "Note: This affix is a lot easier if Tricks of the Trade or Misdirection are used on cooldown. Strong AoE CC is beneficial here as well in case mobs get loose.",
            es: "Nota: Este afijo es mucho más fácil si el grupo utiliza recursos de clase como redirección a CD. CCs en áreas también ofrecen ventaja en el caso de que los pulls se escapen del tanque.",
            pt: "Nota: Este afixo é bem mais fácil se o grupo utiliza corretamente os recursos de classe como redirecionar a CD. Controles de áreas também são vantajosos caso os inimigos se separem do tanque."
        },

        volcanic_info: {
            en: "Enemies cause eruptions of flame near distant players. Additional volcanoes may appear near existing volcanoes.",
            es: "Mientras están en combate, los enemigos provocan de forma periódica que surjan llamas bajo los pies de los jugadores distantes.",
            pt: "Enquanto estiverem em combate, os inimigos periodicamente fazem com que glóbulos de fogo surjam sob os pés dos jogadores distantes."
        },

        volcanic_note: {
            en: "Note: Keep an eye out for the volcano animation under your feet or near you. Sometimes you may not have to move!",
            es: "Nota: Estate atento a la animación del volcán bajo tus pies o cerca de ti. ¡A veces puede que no tengas que moverte!",
            pt: "Nota: Fique atento as animações do vulcão debaixo dos seus pés ou perto de você. As vezes você nem precisa mover-se!"
        },

        explosive_info: {
            en: "Creatures have a chance to summon an Explosive Orb at a nearby location that will explode, inflicting damage 50% of the player’s maximum health as damage.",
            es: "Mientras están en combate, los enemigos invocan de forma periódica orbes explosivos que detonan si nadie los destruye.",
            pt: "Em combate, os inimigos evocam periodicamente orbes Explosivos que explodirão se não forem destruídos."
        },

        explosive_note: {
            en: "Note: An explosive orb will spawn with a 6 second cast. If the cast goes off the entire party will take 50% of their max hp in damage. They are <strong>AOE immune so you can't cleave them down!</strong> They can also spawn on boss fights.",
            es: "Nota: Un orbe explosivo aparece con un lanzamiento de hechizo de 6 segundos. Si el orbe castea, todo el grupo recibirá un daño del 50% de salud máxima. ¡Estos son <strong>inmunes al daño en áreas, o sea cleave no funciona!</strong> Los orbes pueden aparecer en combates con jefes.",
            pt: "Nota: Um orbe explosivo surge com um lançamento de magia de 6 segundos. Caso o orbe finalize o lançamento, todo o grupo recebe um dano de 50% de sua saúde máxima. Eles são <strong>imunes ao dano em áreas ou cleave</strong> Los orbes pueden aparecer en combates con jefes."
        },

        quaking_info: {
            en: "Players will periodically Quake, inflicting 20% of the player’s maximum health as damage and interrupting spell casts of themselves and nearby allies.",
            es: "Los jugadores emiten una ola de choque de forma periódica, lo que inflige daño e interrumpe a los aliados cercanos.",
            pt: "Os jogadores emitem periodicamente uma onda de choque, causando dano e interrompendo aliados próximos."
        },

        quaking_note: {
            en: "Note: spread out.",
            es: "Nota: Separaos. Cuanto más separados estén, mejor. Interrumpe los lanzamientos de hechizos y también el intento de adquirir el buffo de comida.",
            pt: "Nota: Separarem-se!"
        },

        grievous_info: {
            en: "While below 90% health, players are afflicted with Grievous Wound.",
            es: "Cuando estáis heridos y os queda menos del 90% de salud, recibiréis daño creciente en el tiempo hasta que os curen y recuperéis al menos el 90% de esta.",
            pt: "Quando são feridos e chegam a menos de 90% dos pontos de vida, os jogadores sofrem dano crescente ao longo do tempo até serem curados acima de 90% dos pontos de vida."
        },

        grievous_note: {
            en: "Note: You bleed until you are healed above 90%. The damage over time stacks up to a total of 8% player health as damage per tick. Finally, another reason to blame your healer!",
            es: "Nota: Sangrarás hasta que se te cure por encima del 90%. ¡Finalmente, otra razón para culpar a tu healer (¿no hay nada que curar?)!",
            pt: "Nota: Você sangrará enquanto não se curar mais de 90%. Finalmente, outro motivo para culpar seu healer!"
        },

        fortified_info: {
            en: "Non-bosses have more health and deal 30% more damage.",
            es: "Los enemigos que no son jefes tienen un 20% más de salud e infligen hasta un 30% más de daño.",
            pt: "Inimigos que não são chefes têm 20% mais pontos de vida e causam até 30% a mais de dano."
        },

        fortified_note: {
            en: "Note: interrupting and dodging any/all trash mob abilities becomes an absolute priority with this affix. Most of the time spent in the dungeon will be fighting beefy trash, don't be afraid to use CDs.",
            es: "Nota: Interrumpir y esquivar la mayoría (o todas) las habilidades de los pulls se convierte en una prioridad absoluta con este afijo. La mayor parte del tiempo que pases en la mazmorra lucharás duramente contra los pulls, así que por favor, usa tus CDs.",
            pt: "Nota: Interromper e esquivar a maioria (ou todas) as habilidades dos mobs são prioridade absoluta com este afixo. A maior parte do tempo dentro da masmorra estarás em combate puramente com mobs, não economize os CDs."
        },

        tyrannical_info: {
            en: "Bosses have more health and deal 15% more damage.",
            es: "Los jefes enemigos tienen un 40% más de salud e infligen hasta un 15% más de daño.",
            pt: "Inimigos chefes têm 40% a mais de vida e causam até 15% a mais de dano."
        },

        tyrannical_note: {
            en: "Note: Boss abilities are no longer trivial. Boss mechanics need to be done or people will die. Some fights become endurance tests because they last so long.",
            es: "Nota: Las habilidades de los jefes ya no son triviales. La mecánica del jefe debe hacerse o se morirá \"la people\". Algunas peleas se convierten en pruebas de resistencia porque duran mucho tiempo.",
            pt: "Nota: As habilidades dos chefe não são mais triviais. As mecânicas do chefe precisam ser feitas ou verás gente morta :). Alguns combates se tornam verdadeiras provas de resistência (e não é do BBB) porque duram muito tempo."
        },
        fortified_info_2: {
            en: "Non-bosses have more health and deal more damage.",
            es: "Los enemigos que no son jefes tienen un 20% más de salud e infligen hasta un 30% más de daño.",
            pt: "Inimigos que não são chefes têm 20% mais pontos de vida e causam até 30% a mais de dano."
        },

        fortified_note_2: {
            en: "Note: Easier now than when this was a level 10 affix. You'll find trash won't be as beefy now.",
            es: "Nota: Interrumpir y esquivar la mayoría (o todas) las habilidades de los pulls se convierte en una prioridad absoluta con este afijo. La mayor parte del tiempo que pases en la mazmorra lucharás duramente contra los pulls, así que por favor, usa tus CDs.",
            pt: "Nota: Interromper e esquivar a maioria (ou todas) as habilidades dos mobs são prioridade absoluta com este afixo. A maior parte do tempo dentro da masmorra estarás em combate puramente com mobs, não economize os CDs."
        },

        tyrannical_info_2: {
            en: "Bosses have more health and deal more damage.",
            es: "Los jefes enemigos tienen un 40% más de salud e infligen hasta un 15% más de daño.",
            pt: "Inimigos chefes têm 40% a mais de vida e causam até 15% a mais de dano."
        },

        tyrannical_note_2: {
            en: "Note: Easier than when this was a level 10 affix. Bosses will still one shot you with certain abilities but it isn't as absurd as Legion.",
            es: "Nota: Las habilidades de los jefes ya no son triviales. La mecánica del jefe debe hacerse o se morirá \"la people\". Algunas peleas se convierten en pruebas de resistencia porque duran mucho tiempo.",
            pt: "Nota: As habilidades dos chefe não são mais triviais. As mecânicas do chefe precisam ser feitas ou verás gente morta :). Alguns combates se tornam verdadeiras provas de resistência (e não é do BBB) porque duram muito tempo."
        },

        infested_info: {
            en: "Some non-boss enemies have been infested with a Spawn of G'huun. Those mobs will heal all other trash mobs and bosses within 8yds.",
            es: "Un engendro de G'huun ha infestado a algunos enemigos que no son jefes. Estos enemigos infestados curan a todos los demás enemigos cercanos a una distancia de 8yds.",
            pt: "Alguns inimigos normais foram infectados com Crias de G'huun. Esses inimigos irão curar todos os outros inimigos normais e chefes em um raio de 8 metros.",
        },

        infested_note: {
            en: "Random trash packs will have a mob with Spawn of G'huun. These packs change every week. When the Spawn of G'huun mob is killed, worms will explode from its body and run toward living mobs. If they make it, those mobs will gain the Spawn of G'huun buff and the cycle repeats. ",
            es: "Grupos aleatórios de enemigos tendrán uno de ellos infectado con la Cría de G'huun. Estos grupos en teoría cambia todas las semanas. Cuando un enemigo infectado con la Cría de G'huun se muere, pequeñas lombrices explotarán de sus cuerpos y corren en dirección a los enemigos vivos, si estas crías llegan a lanzar echizo sobre un enemigo no infectado, el ciclo se repetirá.",
            pt: "Grupos aleatórios de inimigos terão uma praga infectada com Cria de G'huun. Esses grupos mudam toda semana. Quando o inimigo infectado com Cria de G'huun morre, vermes explodirão de seus corpos e irão em direção de inimigos vivos. Se eles conseguirem, esses inimigos serão infectados com Cria de G'huun e o ciclo se repetirá.",
        },
        reaping_info: {
            en: "All enemies killed generate a ghost with 50% of the health of the source target when they die. All currently active ghosts will aggro the group at 20%, 40%, 60%, 80%, and 100% enemies defeated. They are not affected by affixes and do not have the source enemy's abilities.",
            es: "Todos los enemigos derrotados, generan un fantasma con el 50% de la vida del enemigo original cuando mueren. Todos los fantasmas activos, atacarán al grupo al alcanzar el 20%, 40%, 60&, 80% y 100% de los enemigos derrotados. No son afectados por los afijos y no poseen sus habilidades originales.",
            pt: "Todos os inimigos mortos geram um fantasma com 50% da saúde do alvo de origem quando morrem. Todos os fantasmas ativos no momento irão atacar o grupo quando a porcentagem de inimigos derrotados for 20%, 40%, 60%, 80% e 100%. Eles não são afetados por afixos e não têm as habilidades do inimigo de origem."
        },
        reaping_note: {
            en: "Ghosts should not aggro other mobs when they activate. There are 3 ghost archetypes with different abilities. <b>Risen Souls</b> only melee. <b>Tormented Souls</b> cast a spell that does 25% of player max health as damage. <b>Lost Souls</b> cast a cone spell that does a 20% health reduction, and explode into swirlies when they die.",
            es: "Los fantasmas no generan agresión en los otros enemigos cuando se activan. Hay 3 arquetipos de fantasmas con diferentes habilidades. <b>Alma resucitada</b> solo melee. <b>Almas atormentadas</b> lanzan un hechizo que daña por el 25% de la vida máxima del jugador. <b>Almas perdidas</b> lanzan un hechizo en cono que genera un 20% de reducción de vida, y explota en remolinos cuando mueren.",
            pt: "Os fantasmas não irão gerar aggro em outros inimigos enquanto estiverem ativos. Existem 3 tipos de fantasmas com habilidades diferentes. <b>Almas Reanimadas</b> somente corpo a corpo. <b>Almas Atormentadas</b> lança um feitiço que causa dano equivalente a 25% da vida máxima do jogador. <b>Almas Perdidas</b> lança um feitiço em formato de cone que reduz em 20% a saúde do jogador e explode em redemoinhos quando morre."
        },
        beguiling_info: {
            en: "Watery snake people have invaded all the dungeons! Enchanted ladies cast a damage reflect aura, but get knocked back when you attack them. When their energy bar reaches 0 (it depletes from being in combat), they warp out of the dungeon. Void-Touched snake people have True Sight and cast a spell that does half your HP in damage if you're in line of sight. It also gives you a stacking shadow damage increase debuff. Emissary snakey boys have a passive aura that make enemies near it immune to CC.",
            es: "Emisarios de agua han invadido todos los calabozos! Emisarias encantadas poseen un aura que refleja daño, pero pueden ser desplazadas si las atacas. Cuando su barra de energia llega a 0 (se agota mientras está en combate), se teletransportaran fuera del calabozo. Emisarias tocadas por el Vacío poseen Visión del Vacío y lanzan un hechizo que causa daño igual a la mitad de tu HP si estás en su linea de visión. También otorga un debuff de daño de sombra que se acumula. Emisarias de las mareas poseen un aura pasiva que hace que los enemigos cercanos sean inmunes al CC",
            pt: "Emissárias aquáticas invadiram todas as masmorras! Emissárias encantadas possuem uma aura que reflete dano, mas podem ser empurradas quando atacadas. Quando a barra de energia chega a 0 (diminui quando em combate), elas saem da masmorra. Emissária Tocada pelo Caos têm visão verdadeira e lançam um feitiço que causa metade do seu HP em dano se você estiver na linha de visão. Também inflinge um debuff acumulável que aumenta o dano de sombra recebido. Emissárias das Marés têm uma aura passiva que torna os inimigos próximos a ela imunes a efeitos de controle de grupo."
        },
        beguiling_note: {
            en: "Emissaries can only be CC'd for a max of 8 seconds in a single CC.",
            es: "Los emisarios solo pueden ser CC'ados por un máximo de 8 segundos en un mismo CC.",
            pt: "Emissários permanecem sob efeito de um mesmo controle de grupo por no máximo 8 segundos."
        },
	   awakened_info: {
            en: "Four obelisks are spawned on the map. Activating the obelisk while out of combat teleports you to spooky world and spawns a miniboss inside spooky world. If you do not kill the minibosses in spooky world before you start the last encounter, they will all activate and aggro to you.",
            es: "Los obeliscos repartidos por la mazmorra permiten a los jugadores entrar en Ny'alotha y enfrentarse a poderosos sirvientes de N'Zoth. Durante el enfrentamiento con el jefe final habrá que ocuparse de los sirvientes que no hayan sido eliminados previamente.",
            pt: "Obeliscos pela masmorra permitem que os jogadores entrem em Ny'alotha e enfrentem os poderosos servos de N'Zoth. Se um servo ficar para atrás, ele será enfrentado durante a batalha contra o chefe final."
        },
        awakened_note: {
            en: "Heading to spooky world phases you out of the regular dungeon (meaning you cannot aggro trash while there). Killing the miniboss in spooky world causes a rift to appear which you can use to exit spooky world. Using the rift will put you in that exact location in the regular world. This could be used to skip trash, or be used to wipe your group if you aren't paying attention to where the rift is. Each miniboss only spawns when its obelisk is activated.",
            es: "Al entrar en una mazmorra veréis obeliscos del Imperio Negro repartidos por el terreno. Interactuar con uno de estos obeliscos te transportará a otro mundo (perderás todo el aggro mientras al transportarte), en el que se puede ver el creciente poder de N’Zoth y a uno de sus lugartenientes vigilando. Derrotar al lugarteniente te devolverá a tu realidad, pero lo hará en el punto exacto en el que te encuentres tras derrotar el mini-jefe.",
            pt: "Ao entrar na masmorra verás obeliscos do Império Negro repartidos pelo terreno. Qualquer interação com estes obeliscos irá teletransportar-te ao outro mundo (perde todo o aggro enquanto se teletransporta), poderás ver o crescente poder de N’Zoth e um sentinela vigiando. Derrotar ao sentinela te devolverá ao mundo real, porém o fará no ponto exato que você está ao derrotar o mini-chefe."
        },
        "Weekly schedule for affixes": {
            es: "Calendario semanal de afijos",
            pt: "Agenda semanal de afixos"
        },

        "These may not be entirely correct as there are undocumented affix schedule changes!" : {
            es: "Pueden no ser enteramente correctos ya que hay cambios no documentados en el calendario!",
            pt: "Pode não estar totalmente correto, pois há alterações nos agendamentos de afixo que não são documentadas!"
        },

        // Group considerations

        "Group considerations": {
            es: "Consideraciones de grupos",
            pt: "Considerações de grupo"
        },

        "Group makeup barely matters at low keystone levels. There is little reason to sweat your group composition on keys below 5-6. Bring the player, not the class." : {
            es: "La composición del grupo importa poco en piedras angulares de nivel bajo. No hay motivo para esforzarse en la composición del grupo para piedras menores a 5-6. Trae al jugador, no la clase.",
            pt: "A composição do grupo quase não importa em chaves de nível baixo. Há poucas razões para se esforçar em escolher a composição do seu grupo em chaves menores do que de 5-6. Traga o jogador, não a classe."
        },

        "That being said, your group composition will always be one tank, one healer, and three DPS. Multi-tank strategies are not viable." : {
            es: "Dicho esto, la composición del grupo siempre será de un tanque, un sanador y tres DPS. Estratégias de múltiples tanques no son viables",
            pt: "Dito isto, a composição do seu grupo será sempre um tanque, um healer e três DPS. Estratégias com vários tanques não são viáveis."
        },

        "It's important to build a group that is well rounded in order increase your chances of completing a keystone within the timer. This means bringing consumables to make up for gaps in your group composition." : {
            es: "Es importante armar un grupo que esté bien nivelado para incrementar las probabilidades de completar una piedra angular en tiempo. Esto significa traer consumibles para suplir las falencias en la composición",
            pt: "É importante criar uma boa composição de grupo para aumentar suas chances de concluir a chave dentro do tempo. Isso significa que trazer consumíveis para compensar as lacunas na composição do seu grupo é importante."
        },

        "When considering your group composition, it is also to consider what each class can bring to the table. Does your group have:" : {
            es: "Cuando consideres la composición de tu grupo, recuerda considerar que puede aportar cada clase al grupo. Acaso tu grupo tiene:",
            pt: "Ao considerar a composição do seu grupo, também é necessário considerar o que cada classe pode trazer à mesa. Por acaso o seu grupo tem:"
        },

        "Ways to dispel buffs on enemies?" : {
            es: "Maneras de dispelear buffs en enemigos?",
            pt: "Maneiras de dissipar buffs nos inimigos?"
        },

        "Ways to dispel debuffs on allies?" : {
            es: "Maneras de dispelear debuffs en aliados?",
            pt: "Maneiras de dissipar debuffs em aliados?"
        },

        "Multiple interrupts or other CC to stop enemy casting?" : {
            es: "Múltiples interrupciones y otros CC para evitar el casteo enemigo?",
            pt: "Múltiplas interrupções ou outro CC para interromper a conjuração do inimigo?"
        },

        "Strong CC for difficult trash pulls?" : {
            es: "CC fuertes para pulls con trash complicada?",
            pt: "CC fortes para pulls difíceis?"
        },

        group_cons_info: {
            en: "Again, selecting your group carefully matters mostly for higher level keys where the difficulty of the run is often very high. For lower level keystone runs, group makeup is not as important as it is easy to power through most of the content. Just saying. Do what you want. <code>¯\\_(ツ)_/¯</code>",
            es: "De nuevo, seleccionar tu grupo con cuidado importa más para piedras de nivel alto, donde la dificultad es por lo general mayor. Para piedras de nivel bajo, la composición del grupo no es tán importante. Solo digamos. Haz lo que quieras. <code>¯\\_(ツ)_/¯</code>",
            pt: "Mais uma vez, selecionar seu grupo com cuidado é importante principalmente para chaves de nível superior, onde a dificuldade geralmente é muito alta. Para chaves de nível inferior, a composição do grupo não é tão importante quanto é completar a maior parte do conteúdo. Apenas dizendo. Faça o que você quiser. <code>¯\\_(ツ)_/¯</code>"
        },

        "Consumables" : {
            es: "Consumibles",
            pt: "Consumíveis"
        },

        "Mandatory (at least above keystone level 10)" : {
            es: "Obligatorio (al menos en piedras mayores a nivel 10)",
            pt: "Obrigatório (pelo menos em chaves acima do nível 10)"
        },

        "Current food" : {
            es: "Comida actual",
            pt: "Comida atual"
        },

        "Current flasks" : {
            es: "Frascos actuales",
            pt: "Frascos atuais"
        },

        "Current potions" : {
            es: "Pociones actuales",
            pt: "Poções atuais"
        },

        "Repair mount/Auto-Hammer/Jeeves/Reeves" : {
            es: "Montura de reparar/Martillo automático/Jeeves/Reeves",
            pt: "Montaria de reparo/Martelo automático/Jeeves/Reeves"
        },

        "\"Missing a class\" consumables": {
            es: "Consumibles para clases faltantes",
            pt: "\"Consumíveis\" para classes faltantes"
        },

        "Drums (any tier is fine, they all give 25% haste): makes up for no Bloodlust/Heroism/Time Warp/Hysteria, etc" : {
            es: "Tambores (cualquier nivel está bien, todos ellos dan 25% de celeridad): para suplir a Ansia de sangre/Distorsión temporal/Histeria, etc",
            pt: "Tambores (qualquer nível é bom, todos eles dão 25% de aceleração): supre a necessidade de sede de sangue / heroísmo / distorção temporal / histeria, etc."
        },

        "War-Scrolls of Battle Shout (attack power buff), Fortitude (stamina buff), Intellect (intellect buff): makes up for no warrior/priest/mage, respectively" : {
            es: "Pergaminos de guerra de Grito de batalla (buff de poder de ataque), Entereza (buff de aguante), Intelecto (buff de intelecto): para suplir a guerrero/sacerdote/mago, respectivamente",
            pt: "Pergaminho de Guerra do Brado de Batalha (buff de poder de ataque), Fortitude (buff de resistência), Intelecto (buff de intelecto): supre a falta de um guerreiro/sacerdote/mago, respectivamente"
        },

        "Optional/niche/high key consumables" : {
            es: "Opcional/nicho/consumibles para piedras de alto nivel",
            pt: "Consumíveis opcionais/com nicho específico/chaves altas"
        },

        "Invisibility potions (used for skipping troubling trash packs at high key levels)": {
            es: "Pociones de invisibilidad (usadas para saltear packs de trash problemática en piedras de nivel alto)",
            pt: "Poções de invisibilidade (usadas para pular inimigos problemáticos em níveis mais altos)"
        },

        "Tome of Tranquil Mind (you are allowed to step out of the instance to change talents using a tome)": {
            es: "Escrito de la mente tranquila (se permite salir de la instancia para cambiar talentos utilizando un escrito)",
            pt: "Tomo da mente tranquila (se estiver fora de combate, permite ajustar os talentos dentro da massamora)"
        },

        "You can no longer use the Proving Grounds to grab a free Healthstone but you can invite a Warlock to the party before start the dungeon.": {
            es: "Ya no puedes pillar una piedra de salud del Terreno de Pruebas, sin embargo podrás invitar un brujo a la party antes de empezar la mazmorra y obtener la piedra de salud de su pozo.",
            pt: "Não é mais possível lotear pedras da vida no terreno de provas, agora é necessário convidar um bruxo ao grupo e lotar la pedra do poço."
        },

        //Useful stuff
        "Useful stuff": {
            es: "Cosas útiles",
            pt: "Coisas úteis"
        },

        "Addons": {
            es: "Addons",
            pt: "Add-ons"
        },

        //GottaGoFast
        " - All-in-one mythic+ timer. Shows % value of mobs on tooltip, timers required for +2/+3 chest and times that objectives are completed.": {
            es: " - Todo en uno para míticas+. Muestra el porcentaje (%) de enemigos no-jefes al pasar el ratón sobre ellos, los temporizadores necesarios para hacer en +2 / +3 cofres y los tiempos en que concluyeron los objetivos.",
            pt: " - Tudo em um para míticas+. Mostra o percentual (%) de inimigos ao passar o mouse sobre eles, cronometro necessário para finalizar com +2 / +3 baús e os tempos de conclusão dos objetivos."
        },

        //Angry Keystones
        " - Another take on the keystone/mythic+ timer. Displays affix rotation schedule and current affixes as well as providing chest timers and kill count % ingame. Also styles keystone links ingame to show you what dungeon they're for.": {
            es: " - Otra forma de visualizar el temporizador de la mítica+. Muestra el calendario de la rotación de afijos y también los afijos actuales, además de proporcionar temporizadores para los cofres y recuento de muertes de los enemigos no-jefes. También es posible enlazar la piedra en el juego para enseñar las mazmorras y dificultades.",
            pt: " - Outra forma de visualizar o cronometro na mítica+. Mostra uma agenda com a rotaçao dos afixos e também os afixos atuais, além disso disponibiliza o cronometro para os baús e contagem de tropas pendentes. Também é possível linkear pedras-chave com as masmorras e dificuldades."
        },

        "Keystone and group information": {
            es: "Datos sobre piedra angular mítica y grupos",
            pt: "Dados de pedras-chave mítica"
        },

        //Method Dungeon Tools
        " - Plan out routes, then use a shareable interactive map to make sure your group is on the same page.": {
            es: " - Planificación de rutas, puedes compartir un mapa interactivo para asegurar que todo el grupo tenga claro la ruta y que hacer la mítica+.",
            pt: " - Planejamento de rota, é possível compartilhar um mapa interativo para assegurar que o grupo saiba como jogar dentro da mazmorra mitica+."
        },        

        //Raider.io Addon
        " - Hover over players in the world, guild, etc and get their raider.io score. The addon comes with an updater client to automatically get people's scores from raider.io!": {
            es: " - Utilizado por muchísimos jugadores y guilds en todo el mundo para obtener scores en raider.io. Este addon viene con un cliente que se actualiza automaticamente con el score más actualizado posible.",
            pt: " - Usado por muitos jugadores e guildas em todo o planeta para obter score no raider.io. Este addon também tem um cliente para atualizar-se automaticamente com o score mais atualizado possível."
        },

        //Astral Keys
        " - Shows keys for guild mates, Battle Net friends and alts. It also shows if your friends/guildies have done a 15+ or not!": {
            es: " - Muestra las piedras angulares para compañeros del guild, amigos de Battle.Net y alters. ¡También muestra si tus amigos / compañeros del clan han hecho piedras superiores a una +15 o no!",
            pt: " - Mostra as pedras-chave para as pessoas da guilda, amigos de Battle.Net e alters. Também mostra se seus amigos / pessoas do clan finalizaram pedras-chave superiores a +15 ou não!"
        },

        //BFA Dungeons
        " - Comprehensive alerts for trash and boss abilities. Covers things bossmods do not. <strong>Absolutely invaluable.</strong>": {
            es: " - Alertas visuales para los habilidades de boses y pulls. Enseña cosas que los addons tipo bossmods no muestra. <strong>Muy recomendable.</strong>",
            pt: " - Alertas visuais para as habilidades dos chefes e pulls. Mostra detalhes que os addons do tipo bossmods não mostram. <strong>Extremamente recomendável.</strong>"
        },

        //Explosive affix Weakaura
        " - Highlights active explosive orb nameplates and provides a tracker of active explosive orbs.": {
            es: " - Destaca los orbes explosivos activos en los nameplates y enseña também cuantos orbes explositovs están activos.",
            pt: " - Destaca os orbes explosivos ativos nos nameplates e exibe também quantos orbes explositovs estam ativos."
        },

        //TimeToDie
        " - A no frills time-to-target-death indicator. Useful for timing cooldowns, etc.": {
            es: " - Un indicador de tiempo sencillo hasta la muerte objetivo. Útil para cronometrar cooldowns, etc.",
            pt: " - Indicador de tempo restante até a morte do objetivo. Útil para controlar os cooldowns, CDs, etc."
        },

        //RaidCDs WeakAura
        " - A WeakAura to track raid/group utility CDs (i.e Barkskin, Blessing of Sacrifice, etc).": {
            es: " - Utilizado para el controla de las utilidades y CDs existentes (ejemplo: Barkskin, Sacrifice, etc.).",
            pt: " - Utilizado para controlar as utilidades e CDs existentes (exemplo: Barkskin, Sacrifice, etc.)."
        },

        //Effective Health
        " - It shows you how much physical and magic damage you can take. Based on current health, absorbs, and defensive cooldowns from yourself and others.": {
            es: " - Enseña cuanto daño físico y mágico puedes aguantar. Está basado en tu vida actual, absorsión y cooldowns defensivos tuyos y de tu equipo.",
            pt: " - Mostra quanto dano fisico e mágico você pode anguentar. Está baseado na tua vida atual, absorção e cooldowns defensivos, teu e também do seu time."
        },

        //raider.io
        " - Raider.io has all kinds of tools including character specific M+ tracking, successful run comp tracking, and ranks for m+ dungeons. <strong>Community created!</strong> Their <a href=\"https://raider.io/addon\">addon</a> is probably the most useful group building/vetting addon you'll find as it uses their scoring system to show you how experienced players are.": {
            es: " - Posee todo tipo de herramienta incluyendo personajes específicos para controlar las míticas+, rankings, etc. <strong>Comunidade creada</strong>. Su <a href=\"https://raider.io/addon\">addon</a> es sin duda el más utilizado para construir un grupo de cara a encontrar personas con el score y experiencia de jugadores necesaria para asumarse a tu grupo de míticas+.",
            pt: " - Possuem varios tipos de ferramentas incluindo personagens específicos para controlar as míticas+, rankings, etc. <strong>Comunidade criada</strong>. Seu <a href=\"https://raider.io/addon\">addon</a> sem dúvida é o mais utilizado para formar um grupo e encontrar pessoas com score e experiencia necessária para entrar em seu grupo de míticas+."
        },

        //Questionably Epic
        " - Easy-to-digest dungeon guides and an <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> that provides tips and strategy reminders throughout dungeons. <strong>Community created!</strong>": {
            es: " - Guia de mazmorra con un <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> facil de entender. Dispone de consejos, estrategias y ayuda para avanzar en las mazmorras.",
            pt: " - Guia de dungeon com um <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> facil de compreender. Contém conselhos, estrategias e ajuda para avançar nas dungeons."
        },

        //MPH
        " - (Mythic Plus Helper) Looks up group candidates and returns item level equipped/highest, total mythic plus runs and Heart of Azeroth level! Be sure to get the <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> for ease of use. <strong>Community created!</strong>": {
            es: " - Ayuda a buscar grupos y candidatos además de contestar con el item level más alto equipado, total de míticas plus realizadas y el nível do colar. Debes descargar el <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> de cara a facilitar su utilización.",
            pt: " - Ajuda a buscar grupos e candidatos e responde com o item level mais alto equipado, total de míticas plus feitas e o nível do colar. Deve baixar o <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> para facilitar seu uso."
        },

        //Mythic+ Friends Discord
        " - The largest M+ Discord server aimed at helping players form groups and teaching new players about mythic plus.": {
            es: " - El mayor servidor de Discord de míticas+ que ayudan a jugadores y grupos además de enseñar a nuevos jugadores que desean hacer míticas+.",
            pt: " - O maior servidor de Discord de míticas+ onde ajudam a jogadores e grupos que desejam aprender e avançar nos conhecimentos das táticas das míticas+."
        },

        //Mythic+ EU
        " - Mythic plus group finder server for the EU.": {
            es: " - Encontrar grupos de míticas+ para jogar em EU.",
            pt: " - Buscador de grupos de míticas+ em Europa."
        },

        //RU MythicKeys
        " - Russian group finding and key pushing server.": {
            es: " - Rusos buscando grupos e llaves para pushear piedras.",
            pt: " - Russos buscando grupos e chaves míticas para subir níveis."
        },        

        //Keystones
        "Keystones": {
            es: "Piedras angulares míticas",
            pt: "Pedra-chave mítica"
        },

        keystones_timer: {
            en: "Complete a keystone run within the timer to upgrade a keystone to the next level.<span class=\"affixes-list__note\"></br>Example: Your group completes Atal'Dazar +6 in 37 minutes and 32 seconds. The par timer is 39 minutes, the keystone levels up from level 6 to level 7 and rolls a new random dungeon.",
            es: "Finaliza una mazmorra mítica en tiempo para mejorar la piedra angular.<span class=\"affixes-list__note\"></br>Ejemplo: Tu grupo completa Atal'Dazar +6 en 37 minutos y 32 segundos. El tiempo limite es 39 minutos, la piedra angular sube del nivel 6 al nivel 7 y sortea un nuevo calabozo de forma aleatoria.</span>",
            pt: "Complete uma corrida mítica para aumentar uma Pedra-chave mítica.<span class=\"affixes-list__note\"></br>Exemplo: Seu grupo completa o Atal'Dazar +6 em 37 minutos e 32 segundos. O tempo máximo é de 39 minutos, a pedra angular sobe do nível 6 para o nível 7 e uma nova masmorra aleatória é escolhida."
        },

        keystones_20per: {
            en: "Complete a keystone run with 20% of the timer remaining and upgrade the keystone 2 times in one go.</br><span class=\"affixes-list__note\">Example: Your group completes The MOTHERLODE!! +5 in 30 minutes and 54 seconds. The par timer is 39 minutes, so the keystone levels up from level 5 to level 7 and rolls a new random dungeon.</span>",
            es: "Finaliza una piedra angular con 20% del tiempo restante y mejora la piedra 2 niveles de una vez.</br><span class=\"affixes-list__note\">Ejemplo: Tu grupo completa VETA MADRE +5 en 30 minutos y 54 segundos. El tiempo límite es 39 minutos, entonces la piedra subirá de nivel 5 a nivel 7 y sortea un nuevo calabozo de forma aleatoria.</span>",
            pt: "Conclúa com 20% do tempo restante e aumente 2 níveis de uma vez.</br><span class=\"affixes-list__note\">Exemplo: Seu grupo conclui MEGAMINA!!! +5 em 30 minutos e 54 segundos. O tempo máximo é de 39 minutos, então a pedra angular sobe do nível 5 para o nível 7 e uma nova masmorra aleatória é escolhida.</span>"
        },

        keystones_40per: {
            en: "Complete a keysone run with 40% of the timer remaining and upgrade the keystone 3 times in one go.</br><span class=\"affixes-list__note\">Example: Your group completes Shrine of the Storm +2 in 19 minutes and 34 seconds. The par timer is 39 minutes, so the keystone levels up from keystone level 2 to keystone level 5 and rolls a new dungeon.</span>",
            es: "Finaliza una piedra angular con 40% del tiempo restante y mejorea niveles de una vez.</br><span class=\"affixes-list__note\">Ejemplo: Tu grupo completa Altar de la Tormenta +2 en 19 minutos y 34 segundos. El tiempo límite es 39 minutos, entonces la piedra subirá de nivel 2 a nivel 5 y sale una nueva piedra de una mazmorra aleatoria.</span>",
            pt: "Conclúa com 40% do tempo restante e aumente 3 níveis de uma vez.</br><span class=\"affixes-list__note\">Exemplo: Seu grupo completa o Santuário da Tempestade +2 em 19 minutos e 34 segundos. O tempo máximo é de 39 minutos, então a pedra angular sobe do nível 2 para o nível 5 e uma nova masmorra aleatória é escolhida.</span>"
        },

        keystones_didnt: {
            en: "Didn't beat the timer? That's ok. Your keystone doesn't deplete anymore, it just levels down by 1 and rerolls the dungeon.</br><span class=\"affixes-list__note\">Example: Your group completes Waycrest Manor keystone level 5 for Waycrest Manor to keystone level 4 for The Freehold.</span>",
            es: "¿No la has hecho en tiempo? No pasa nada. Tu piedra ya no se agota, simplemente baja un nivel y sortea un nuevo calabozo de forma aleatoria</br><span class=\"affixes-list__note\">Ejemplo: Tu grupo completa Mansión Crestavía en nivel 5, la piedra pasa a ser de nivel 4 y para Fuerte Libre.</span>",
            pt: "Não terminou a tempo? Sem problemas. Sua pedra não se esgotará, simplesmente baixa um nível e uma nova masmorra aleatória será escolhida.</br><span class=\"affixes-list__note\">Exemplo: Seu grupo conclui o nível 5 da pedra angular da Mansão Capeto fora do tempo limite. A chave passará a ser de nível 4 e Angra do Facão será a nova masmorra.</span>"
        },

        keystones_donth: {
            en: "Don't have a keystone? Completing a keystone run will net you a key at the end of the run. This keystone will be one level under the keystone run level you complete. You can also get a key from the final boss of any Battle for Azeroth mythic dungeon.</br><span class=\"affixes-list__note trn\">Example: you complete a The Freehold +7 - the chest at the end will have a random +6 key in it. Example 2: you completed a +0 The MOTHERLODE!! - the chest at the end will have a +2 keystone for a random dungeon in it.</span>",
            es: "¿No tienes una piedra angular? Completar una piedra angular te otorga una piedra angular al finalizar. Esta piedra será un nivel menor al de la piedra completada. También puedes obtener una piedra angular en el jefe final de cualquier calabozo mítico de Batallo por Azeroth.</br><span class=\"affixes-list__note trn\">Ejemplo: Finalizas Fuerte Libre +7 - el cofre al final tendrá una piedra +6 dentro de el. Ejemplo 2: completaste VETA MADRE +0 - el cofre del final tendrá una piedra +2 para algún calabozo aleatorio.</span>",
            pt: "Não tem uma pedra angular? A conclusão de uma dungeon te dará uma pedra angular no final. Essa pedra angular estará um nível abaixo do nível de execução da pedra angular que você concluir. Você também pode obter uma chave do chefe final de qualquer masmorra mítica de Battle for Azeroth.</br><span class=\"affixes-list__note trn\">Exemplo: Você completa uma Angra do Facão +7 - o baú no final terá uma chave +6 aleatória. Exemplo 2: você completou um +0 O MEGAMINA!!! - o baú no final terá uma pedra angular +2 para uma masmorra aleatória.</span>"
        },
                
        "Time penalty for deaths": {
            es: "Penalidades de tiempo por muerte",
            pt: "Pena de tempo para mortes"
        },

        "Five seconds are subtracted from the timer any time a player dies in a keystone run. While this may seem inconsequential at first, the time lost to death will add up quickly if players die to mechanics frequently. This can easily result in missing the timer." : {
            es: "Cinco segundos son restados del contador cada vez que un jugador muere. Aunque esto puede parecer intrascendente al principio, el tiempo perdido por muertes se sumará rápidamente si los jugadores mueren frecuentemente por mecánicas. Esto facilmente puede provocar no llegar a tiempo.",
            pt: "Cinco segundos são subtraídos do cronômetro sempre que um jogador morre em uma dungeon mítica+. Embora isso possa parecer pouco, o tempo perdido irá acumular rapidamente se os jogadores morrerem frequentemente para as mecânicas. Isso pode resultar facilmente na falta de tempo e abaixar o nível da sua chave."
        },

        "Instance Timer and Requirements for \"Level Jumps\"": {
            es: "Temporizador y requerimientos para \"subir de nivel\"",
            pt: "Temporizador e requisitos para \"subir de nível\""
        },

        "keystone level": {
            es: "nivel de la piedra angular",
            pt: "nível da pedra angular"
        },

        "keystone levels": {
            es: "niveles de la piedra angular",
            pt: "níveis da pedra"
        },

        "left on the timer": {
            es: "tiempo restante",
            pt: "tempo restante"
        },


        //Loot
        "Level": {
            es: "Nível",
            pt: "Nível"
        },

        "Loot at the end": {
            es: "Nível del botín",
            pt: "Nível do saqueio"
        },

        "Weekly Chest": {
            es: "Cofre semanal",
            pt: "Baú semanal"
        },

        "The chest at the end of the run guarantees the <strong>GROUP</strong> two pieces of loot from the dungeon loot table. If you beat the timer you will be awarded one extra piece of loot.": {
            es: "El cofre al final de la mazmorra garantiza al <strong>GRUPO</strong> dos piezas de botín. Si superas el cronómetro, se le otorgará una pieza extra de botín.",
            pt: "O baú ao final da corrida garante ao <strong>GRUPO</strong> dois itens do saqueio da masmorra. Se você superar o cronometro, ganhará um item extra ao saquear."
        },

        "In addition, roughly every 5 difficulty levels past 10 will award you with an additional piece of loot (after 10 it's an additive 40% chance per key level for extra loot). +11 has a 40% chance of dropping one extra item, +13 has a 100% chance to drop an extra item (with a 20% chance to drop another extra item) and +15 has a guaranteed chance to drop two extra items for five items total from the chest.": {
            es: "Además, en aproximadamente cada 5 niveles de dificultad (después del nivel 10) te otorgarán una pieza adicional de botín (después del nivel 10 hay una probabilidad adicional del 40% por nivel para obtener un botín adicional). Una +11 tiene un 40% de posibilidades de soltar un elemento extra, la +13 tiene un 100% de posibilidade de soltar un equipo extra (con un 20% de probabilidad de soltar otro iten extra) y una +15 tiene una probabilidad garantizada de soltar dos elementos adicionales por 5 artículos en total del cofre.",
            pt: "Além disso, a cada 5 níveis aproximadamente de dificuldade (depois +10) te entregará um item adicional ao saquear (depois do nivel 10 existe a possibilidade adicional de 40% por nível para receber loot adicional). Uma +11 tem 40% de possibilidade de saquear um elemento extra, a +13 tem 100% de possibilidade de saquear um item adicional (com 20% de possibilidade de saquear outro item extra) e uma +15 tem uma possibilidade garantida de saquear dois itens adicionais por 5 objetos no total do cofre."
        },

        "Example time! You beat a level 15 keystone within the timer and your group is awarded 3 pieces of loot. Later, you beat a level 18 keystone within the timer and your group SHOULD BE awarded with 4 pieces of loot. Repeat every three levels. 21 = 5 pieces of loot, 24 = 6 pieces of loot, etc.": {
            es: "¡Venga, a poner un ejemplo! Tú consigues una piedra angular de nivel 15 dentro del tiempo y tu grupo recibe 3 piezas de botín. </br>Más tarde, superas una piedra angular de nivel 18 en tiempo y tu grupo DEBERÍA recibir 4 piezas de botín. </br>Esto se repite cada tres niveles. 21 = 5 piezas de botín, 24 = 6 piezas de botín, etc.",
            pt: "Se liga ai que é hora da revisão: - Você consegue finalizar uma pedra-chave de nível 15 dentro do cronometro e seu grupo recebe 3 itens do saqueio. </br>Mais tarde, você finaliza uma pedra-chave de nível 18 dentro do tempo e seu grupo DEVERIA ser premiado com 4 itens ao saquear. </br>Agora, repita o mesmo exercício a cada três níveis. 21 = 5 itens de saqueio, 24 = 6 itens de saqueio, etc."
        },

        "At the start of a week (after raid/mythic reset) a chest will appear in your Battle for Azeroth city awarding one piece of loot. It will also contain Azerite (aka Battle for Azeroth artifact power) and Titan Residuum, a new currency used to buy targeted Azerite armor. More on that below. The loot item lvl is determined by the highest level keystone run <strong>COMPLETED</strong> the previous week, within the timer or not.": {
            es: "Al comenzar la semana (después del reinicio semanal de míticas o banda) aparecerá un cofre en tu ciudad de BfA que otorgará un botín. También contendrá Matriz de azerita radiante (también conocido como poder de artefacto de BfA) y Titan Residuum, una nueva moneda utilizada para comprar armaduras de azerita específica o aleatória con base en el slot elegido. El nivel del iten botín se basa en la mítica <strong>FINALIZADA</strong> más alta que has hecho la semana anterior, dentro o fuera del tiempo de la mazmorra.",
            pt: "No início da semana (depois de reiniciar as raids ou míticas) surgirá um baú na tua cidade em BfA que te entregará um loot. Também haverá no cofre azerita para potencializar o colar e Titan Residuum, uma nova moeda utilizada para comprar peças de azerita específica ou aleatória baseada no slot escolhido. O nivel do item do baú está baseado na mítica <strong>FINALIZADA</strong> mais alta da semana anterior, seja em tempo ou não."
        },

        "In addition, the chest will also have a downgraded keystone based on the highest level keystone run <strong>completed</strong> in the season, degrading by 1 level every week you don't complete a run higher than your previous highest.": {
            es: "Además, el cofre también tendrá una piedra angular degradada (-1) basada en la finalización de piedra angular de nivel más alto <strong>completada</strong> en la temporada, degradando el nivel de uno en uno a cada semana que no se complete una mítica más superior que su anterior mítica de nivel más alta.",
            pt: "Além disso, o baú também terá uma pedra-chave rebaixada (somente um nível) baseada na corrida de nível mais alto que <strong>VOCÊ COMPLETOU</strong> na semana anterior."
        },

        "Example: You complete a +11 one week and it is your highest completed run. Next week you get a +10 keystone from your chest. That same week you don't complete anything higher than a +10. Next reset you get a +9 key from the chest.": {
            es: "Ejemplo: Finalizando una mítica +11 en una semana y si es tu mítica de nivel más alto, en la siguiente obtendrás una piedra angular +10 en el cofre. Ya en la semana actual si no finalizas ninguna mítica superior a +10, tras el reinicio semanal obtendrás una piedra +9 en tu cofre.",
            pt: "Exemplo: Ao finalizar uma mítica +11 em uma semana qualquer sendo esta de nível mais alto, na seguinte semana saqueará uma pedra de nível 10 no baú. Na semana atual se não finalizar nenhuma pedra superior a +10, depois do reinicio semanal você terá uma pedra nivel +9 no baú."
        },

        "<strong>*It will be most beneficial to complete a +15 every week to get the highest gear value from your weekly chest.</strong>": {
            es: "<strong>Es más rentable finalizar una +15 semanalmente para obtener el botín con el nivel más alto en cada reinicio semanal.</strong>",
            pt: "<strong>É muito mais rentável finalizar uma masmorra +15 semanalmente para obter o saqueio com o item de nível mais alto a cada reinício semanal.</strong>"
        },

        //Titan Residuum
        "Titan Residuum": {
            es: "Residuo titánico",
            pt: "Resíduo Titânico"
        },

        "Level": {
            es: "Nivel",
            pt: "Nível"
        },

        "TR in weekly chest": {
            es: "RT en el cofre semanal",
            pt: "RT no cofre semanal"
        },

        "The weekly cache no longer awards a random Azerite armor piece, but instead awards a new currency called Titan Residuum. Titan Residuum can also be acquired from scrapping or disenchanting Azerite armor pieces." : {
            es: "El cofre semanal ya no otorga una pieza de azerita aleatória, sino que entrega una moneda llamada Residuo titánico. El Residuo titánico también se puede adquirir al desguazar o desencantar piezas de armadura de azerita.",
            pt: "O baú semanal já não entrega um item de azerita aleatório, porém te da uma moeda chamada Residuo titânico. O Residuo titânico também pode dá pra conseguir ao sucatear ou desencantar os itens de armadura de azerita."
        },

        "Titan Residuum can be used to buy targeted Azerite pieces from Thaumaturge Vashreen.": {
            es: "El residuo titánico puede ser utilizado para comprar piezas específicas de azerita en el Taumaturgo Vashreen.",
            pt: "O residuo titânico pode ser utilizado para comprar itens específicos de azerita."
        },

        //Patreon
        "Patreon heroes": {
            es: "Heroes de Patreon",
            pt: "Heróis do Patreon"
        },

        "You guys keep it all afloat. Thanks for your continued support! Head over to <a href=\"https://www.patreon.com/mythicplus\">the Patreon page</a> if you feel like becoming a patron!": {
            es: "Vosotros nos mantienen a flote. ¡Muchísimas gracias por vuestro apoyo! Visita nuestro <a href=\"https://www.patreon.com/mythicplus\">Patreon</a> si quieres ser un mecena.",
            pt: "Vocês mantém a gente funcionando. Muito obrigado pelo seu apoio! Visite-nos em <a href=\"https://www.patreon.com/mythicplus\">Patreon</a> se quiser ser um apoiador desta causa."
        },

        "Exalted Patrons": {
            es: "Mecena: Exaltado",
            pt: "Exaltado"
        },

        "Revered Patrons": {
            es: "Mecena: Venerado",
            pt: "Reverenciado"
        },

        "Honored Patrons": {
            es: "Mecena: Honorado",
            pt: "Honrado"
        },

        "Friendly Patrons": {
            es: "Mecena: Amistoso",
            pt: "Amigável"
        },

        //Footer
        "suggestions welcome. Reach me by:": {
            es: "sugerencias son bienvenidas. Búscame en:",
            pt: "sugestões são bem-vindas. Me encontre em:"
        },

        "email: admin at mythicpl.us": {
            es: "correo eletrónico: admin at mythicpl.us",
            pt: "e-mail: admin at mythicpl.us"
        },

        "discord: domain#2722 OR the <a href=\"https://discord.gg/Z7GPUw8\">offical mythicpl.us discord ;)</a>": {
            es: "discord: domain#2722 O también el <a href=\"https://discord.gg/Z7GPUw8\">discord oficial de mythicpl.us ;)</a>",
            pt: "discord: domain#2722 OU também pelo <a href=\"https://discord.gg/Z7GPUw8\">discord oficial de mythicpl.us ;)</a>"
        },

        "open an issue at <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>": {
            es: "abrir un ticket en <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>",
            pt: "criar incidencia em <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>"
        },

        "Feeling generous?": {
            es: "¿Te sientes generoso?",
            pt: "Sentindo gratidão? Doe:"
        },

        "You can verify all my identities <a href=\"https://keybase.io/domain\">here.</a>": {
            es: "<a href=\"https://keybase.io/domain\">Aquí</a> están todas las formas en que puedes contactarme.",
            pt: "Você pode ver todos os meus contatos <a href=\"https://keybase.io/domain\">aqui.</a>"
        },

        "World of Warcraft, Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.": {
            es: "World of Warcraft, Warcraft y Blizzard Entertainment son marcas comerciales o marcas comerciales registradas de Blizzard Entertainment, Inc. en los EE.UU. y/o en otros países.",
            pt: "World of Warcraft, Warcraft e Blizzard Entertainment são marcas comerciais ou marcas registradas da Blizzard Entertainment, Inc. nos EUA e/ou em outros países."
        },
        //===== END HOME =====

        //===== CALC =====
        //Page title
        "mythic+ calculator to fill out your artifact": {
            es: "Calculadora de mítica+ para subir el poder de artefacto",
            pt: "Calculadora de mítica+ para evoluir o poder da arma de artefato"
        },

        //Calculator
        "back": {
            es: "volver",
            pt: "voltar"
        },

        "how many m+ do i have to run to get this goddamn artifact levelled? (now with some 7.2 data! m+ AP tokens have changed to scale with dungeon length and I haven't updated that yet)": {
            es: "¿Cuántas mazmorras+ tengo hacer para subir el poder de artefacto? (ahora con datos del parche 7.2! Las chapas de AP de las míticas+ han cambiado y escalan con la duración de la mazmorra pero no he actualizado todavía)",
            pt: "Quantas masmorras+ são necessárias fazer para subir o poder de artefato? (dados atualizados com a versão 7.2! As fichas de AP das míticas+ mudaram e escalam com a duração da masmorra, porém ainda não atualizei)"
        },

        "Current Artifact Level": {
            es: "Nivel actual de poder de artefacto",
            pt: "Nível atual de poder de artefato"
        },

        "Current AP totals and AP to level": {
            es: "Totales de AP actual y AP para el nivel",
            pt: "Totais de AP atuais e AP para o nível"
        },

        btncalculate: {
            en: "CALCULATE",
            es: "Calcular",
            pt: "Calcular"
        },

        "Total AP:": {
            es: "AP Total",
            pt: "AP Total"
        },

        "AP to level:": {
            es: "AP para el nivel:",
            pt: "AP para o nível:"
        },

        "AP to max:": {
            es: "AP para máx. nivel:",
            pt: "AP para máx. nível:"
        },

        "Total M+ required to level": {
            es: "Total de míticas+ requeridas para nivel",
            pt: "Requisito total de míticas+ o nível"
        },

        "M+ to 35": {
            es: "M+ hasta 35",
            pt: "M+ até 35"
        },

        "M+ to 52 (first Concordance point)": {
            es: "M+ hasta 52 (primer punto del Acuerdo)",
            pt: "M+ até 52 (primero punto do Acordo)"
        },


        "M+ to next level": {
            es: "M+ para el siguiente nivel",
            pt: "M+ para o seguinte nível"
        },

        "M+ to Max (lol good luck)": {
            es: "M+ para Máx. (lol gzeta)",
            pt: "M+ para Máx. (puah sorte)"
        },

        // Footer
        "Yeah, this is based off of <a href=\"https://docs.google.com/spreadsheets/d/1Fvx9eKXx6sPa5D_Mz4L9-fUog_kdaOajoTC9UgvV_Ms/edit#gid=0\">this spreadsheet.</a> Don't worry, I worked with the author to get it up here, I didn't just rip them off. Shoutouts to Auhsoj#7928.": {
            es: "Sí, esto está basado en <a href=\"https://docs.google.com/spreadsheets/d/1Fvx9eKXx6sPa5D_Mz4L9-fUog_kdaOajoTC9UgvV_Ms/edit#gid=0\"> esta hoja de cálculo.</a> No te preocupes, yo trabajé con el autor para meter esto aquí, no solo le estafé :). Felicitaciones a Auhsoj#7928.",
            pt: "Sím, isto está feito com base nesta <a href=\"https://docs.google.com/spreadsheets/d/1Fvx9eKXx6sPa5D_Mz4L9-fUog_kdaOajoTC9UgvV_Ms/edit#gid=0\"> planilha.</a> Nao se preocupe, eu trabalhei com o autor para colocar isto aqui, não somente chupinhei :). Agradecimentos a Auhsoj#7928."
        },

        //===== END CALC =====

        //===== GRAPHS =====
        "AFFIX DIFFICULTY SURVEY RESULTS": {
            es: "RESULTADOS DE LA ENQUETE SOBRE LA DIFICULTAD DE AFIJOS",
            pt: "RESULTADOS DA PESQUISA SOBRE A DIFICULDADE DOS AFIXOS"
        },

        "The following charts are using input that I got from the survey hosted on mythicpl.us. Currently we're at <span id=\"totvotes\"></span> votes for the original affixes and <span id=\"newvotes\"></span> for the new affixes. The numbers you see are the total count of each difficulty divided by Total Votes (for the original affixes) or New Votes (for the new affixes) multiplied by 100 to get a percentage.": {
            es: "Los siguientes cuadros están usando la información que obtuve de la encuesta en mythicpl.us. Actualmente estamos en <span id=\"totvotes\"></span> votos para los afijos iniciales y <span id = \"newvotes\"></span> para los nuevos afijos. Los números que ves son el recuento total de cada dificultad dividido entre el total de votos (para los afijos iniciales) o los nuevos votos (para los nuevos afijos) multiplicado por 100 para obtener un porcentaje.",
            pt: "Os gráficos a seguir estão usando os inputs que recebi da pesquisa em mythicpl.us. Atualmente, estamos em <span id=\"totvotes\"></span> votos para os affixes iniciais e <span id=\"newvotes\"></span> para os novos afixos. Os números que você vê são a contagem total de cada dificuldade dividida por votos totais (para os afixos iniciais) ou novos votos (para os novos afixos) multiplicados por 100 para obter uma porcentagem."
        },

        "This page should update in <i>psuedo-realtime</i> since it's just querying the Google spreadsheet hosting all the survey returns.": {
            es: "Esta pagina debería atualizarse en <i>psuedo-tiempo-real</i> una vez que simplemente consulta la hoja de calculo de Google que almacena todos los resultados de la pesquisa.",
            pt: "Esta página deve atualizar em <i>psuedo-tempo-real</i> uma vez que está apenas consultando a planilha do Google que armazena todos os resultados da pesquisa."
        },


        "Haven't taken the survey yet? You can take it <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">here!</a> Wanna see the source spreadsheet? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Click here!</a>": {
            es: "¿No has realizado la encuesta todavía? Puedes responderla <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">aquí!</a>. Quieres ver los resultados? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Click aquí!</a>",
            pt: "Ainda não fez a pesquisa? Você pode fazê-la <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">aqui!</a> Quer ver a planilha de origem? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Clique aqui!</a>"
        },

        invite_survey: {
            en: "Haven't taken the survey yet? You can take it <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">here!</a> Wanna see the source spreadsheet? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Click here!</a>",
            es: "¿Todavía no has contestado la encuesta? ¡Puedes hacerlo <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\"> aquí! </a> ¿Quieres ver la hoja de cálculo con la origen de los datos? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">¡Haz clic aquí!</a>",
            pt: "Ainda não realizou a pesquisa? Você pode levá-lo <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\"> aqui! </a> Quer ver a planilha de origem? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\"> Clique aqui! </a>"
        },

        "Tier 1 affixes": {
            es: "Afijos de tier 1",
            pt: "Afixos de tier 1"
        },

        "Tier 2 affixes": {
            es: "Afijos de tier 2",
            pt: "Afixos de tier 2"
        },

        "Tier 3 affixes": {
            es: "Afijos de tier 3",
            pt: "Afixos de tier 3"
        },

        "Note: nothing too shocking here I don't think. Bolstering is annoying because it slows down your run.": {
            es: "Nota: no creo que haya nada impactante aquí. Potenciante es molesto porque ralentiza mazmorra mítica+.",
            pt: "Nota: não vejo nada chocante aqui. A Encorajadora é irritante porque atrasa a sua mítica+."
        },

        "Note: same deal here. Raging is annoying at best. Overwhelming medium votes here.": {
            es: "Nota: más de lo mismo. Furibunda ya no es tan molesto en comparación. Votos relevantes para dificultad media aquí.",
            pt: "Exemplo"
        },

        "Note: lol.": {
            es: "Nota: izipizi loco.",
            pt: "Nota: facin facin."
        },

        "Note: Not too shocking here either.": {
            es: "Nota: Nada impactante aquí tampoco.",
            pt: "Nota: Não há nada impactante por aqui."
        },

        "Note: Same deal as bolstering, slows your run.": {
            es: "Nota: Es parecido con la Potenciante, también ralentiza mítica+.",
            pt: "Nota: Se parece com a Encorajadora, também atrasa tua mítica+"
        },

        "Note: REEEEEE. Necrotic is more doable now that stacks drop, but is still tough.": {
            es: "Nota: VIEJAAAAAAAA ¡Ayúda al tank!. Necrótica ya es más factible porque quita las cargas al salir de combate (antes no), aún así sigue sendo difícil.",
            pt: "Nota: AI COMO DÓI, pobre tanque. Necrótica ya es más factible porque quita las cargas al salir de combate (antes no), aún así sigue sendo difícil."
        },

        "Note: skittish went from being medium to hard as more people learned to hate it.": {
            es: "Nota: inquieta dejó de ser un afijo de dificultad media a alta, ya que más y más personas fueron aprendiendo a odiarla.",
            pt: "Nota: assustada deixou de ser um afixo de dificuldade média e passou a alta, já que mais e mais pessoas foram aprendendo a odiar-la."
        },

        "Note: EZ PZ 3 CHEST LOL. For real though, volcanic got easier after the 7.2 patch.": {
            es: "Nota: IZI-PIZI 3 COFRES PA VOSOTROS. De hecho es el afijo más fácil desde el parche 7.2.",
            pt: "Nota: FACIIIIN 3 BAÚS!!! Inclusive é o afixo mais fácil desde a versão 7.2"
        },

        "Note: explosive has high wipe potential if people are auto-piloting. i expect it to go from med to hard": {
            es: "Nota: este afijo tiene una posibilidad enorme de matar a uno que otro empanado. Espero que cambie de dificultad media a alta.",
            pt: "Nota: este afixo tem uma possibilidade enorme de matar aos mais despistados. Espero que a dificuldade mude de média a alta."
        },

        "Note: overwhelming medium. spread out and you're good, right?": {
            es: "Nota: definitivamente tiene dificultad media. Separate y todo quedará bien, verdad?",
            pt: "Nota: definitivamente tem dificuldade média. Se separe e tudo vai ficar bem, beleza?"
        },

        "Note: This might transition from medium to hard as well. Blame the healer!": {
            es: "Nota: Este también podría cambiar de media a alta. ¡Culpe al priest!",
            pt: "Nota: Este afixo poderia mudar de dificuldade também. De média a alta. Hora de culpar seu healer!"
        },

        "Note: WHO WOULD HAVE GUESSED. Tier three affixes are the worst.": {
            es: "Nota: COMO DEBERÍAS IMAGINAR. Estos afijos del tier 3 son los peores.",
            pt: "Nota: COMO VOCÊ DEVE IMAGINAR. Estes afixos de tier 3 são os piores."
        }
        //===== END GRAPHS =====

    };

    var userLang = getLang();

    //Testing tranlations
    //userLang = "es";

    var homePage = document.getElementById("home");

    if (homePage) {
        getAffixesReady.then(function () {
            translate(userLang, dict);
        });
    } else {
        translate(userLang, dict);
    }

    function translate(userLang, dict) {
        var translator = $('body').translate({
            lang: userLang,
            t: dict
        });

        $(".lang_selector").click(function (ev) {
            var lang = $(this).attr("data-value");
            translator.lang(lang);
            saveLang(lang);
            ev.preventDefault();
        });
    }

    function saveLang(lang) {
        window.localStorage.setItem('lang', lang);
    }

    function getLang () {
        var lang = localStorage.getItem('lang');

        if (!lang) {
            lang = navigator.language || navigator.userLanguage;
            lang = lang.toLowerCase().substr(0, 2);
        }

        if (lang !== "en" && lang !== "es" && lang !== "pt") {
            //Default
            lang = "en";
        }

        return lang;
    }

});
