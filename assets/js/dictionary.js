$(function () {

    var dict = {

        //===== HOME =====
        //Page title
        "what m+ garbage do i have to deal with this week?": {
            es: "¿Cuáles son mis retos en míticas+?",
            pt: "Quais são os desafios em míticas+?",
            fr: "quels affixes stupides je dois gérer cette semaine en mythique+ ?"
        },

        "what garbage affixes do i have to deal with this week?": {
            es: "¿Cuáles son los retos a los que me enfrentaré esta semana en mi mítica+?",
            pt: "Quais são os desafios que vou enfrentar esta semana em míticas+?",
            fr: "quels affixes stupides je dois gérer cette semaine en mythique+ ?"
        },

        "Affixes:": {
            es: "Afijos:",
            pt: "Afixos:",
            fr: "Affixes :"
        },

        "<span class=\"hard\">Tyrannical</span> and <span class=\"hard\">Fortified</span> changes: <span class=\"hard\">Tyrannical</span> and <span class=\"hard\">Fortified</span> are now keystone level 2 affixes meaning one will always appear on a keystone. The damage/health scaling comes out to be roughly the same at +10 as it was before.": {
            es: "<span class=\"hard\">Tiránica</span> y <span class=\"hard\">Reforzada</span>: Ahora son afijos de nivel 2, lo que significa que siempre aparecerá en una piedra angular. El daño y salud de los enemigos escala más o menos de la misma forma.",
            pt: "<span class=\"hard\">Tirânica</span> e <span class=\"hard\">Fortificada</span>: Agora são afixos de nível 2, com esta mudança podemos apreciar em todas as pedras-chave mítica este afixo. O dano/vida dos inimigos escala mais ou menos da mesma forma.",
            fr: "Changements sur <span class=\"hard\">Tyrannique</span> et <span class=\"hard\">Fortifié</span> : <span class=\"hard\">Tyrannique</span> et <span class=\"hard\">Fortifié</span> sont maintenant des affixes de clé mythique de niveau 2 ce qui signifie qu'un des deux apparaîtra toujours sur une clé mythique. Proportionnellement, les dégâts/santé résultent à peu près à ce qu'ils étaient en +10 auparavant."
        },

        "Gear restrictions:": {
            es: "Restricción de gear:",
            pt: "Restrição de gear:",
            fr: "Restrictions d'équipement"
        },

        "You are now unable to swap gear after a keystone run has begun (once the timer has started).": {
            es: "Ahora no podrás cambiar la equipación una vez que que la mítica plus haya empezado.",
            pt: "Agora você não pode mudar seus equipamentos uma vez indicada a mazmorra mítica plus.",
            fr: "Vous ne pouvez dorénavant plus changer d'équipement une fois que la clé a été lancée (une fois que le chronomètre a démarré)."
        },

        "Threat changes:": {
            es: "Cambios en la amenaza:",
            pt: "Mudanças de aggro:",
            fr: "Changements sur la menace :"
        },

        "Threat generation from tanks is now greatly reduced. Some enemies will drop threat throughout encounters.": {
            es: "La generación de amenaza de los tanques ahora se reduce enormemente. Algunos enemigos podrán perder la amenaza durante los encuentros.",
            pt: "A geraçao de aggro dos tanques agora foi amplamente reduzida. Alguns inimigos irão perder aggro durante os encontros.",
            fr: "La génération de menace des tanks est maintenant grandement réduite. Certains ennemis perdront la menace générée pendant les combats."
        },

        "Weekly chest loot adjustment:": {
            es: "Ajustes en el botín semanal:",
            pt: "Mudanças no loot semanal:",
            fr: "Ajustement du butin du coffre hebdomadaire :"
        },

        "The end-of-week chest will now contain one piece of gear, either dungeon loot or Azerite armor. It will still contain Azerite.": {
            es: "El cofre semanal ahora contendrá una única pieza de equipo, ya sea un botín de mazmorra o un item de Azerita. En las mazmorras con piedra angular mítica no podrás obtener una pieza de azerita, sin embargo puedes conseguirla en una mazmorra mítica (+0) sin piedra angular.",
            pt: "O cofre semanal agora irá conter um único equipamento, seja ele um loot de masmorra ou um item de Azerita. Nas masmorras com pedra-chave não poderás obter um item de azerita. Porém, é possível conseguir em uma masmorra mítica (+0) sem pedra angular.",
            fr: "Le coffre hebdomadaire va maintenant contenir une pièce d'équipement, soit venant d'un donjon ou une pièce d'armure azéritique. Il condiendra également toujours de l'Azérite."
        },

        "STATS": {
            es: "ESTADÍSTICAS",
            pt: "ESTATÍSTICAS",
            fr: "STATISTIQUES"
        },

        "a raider.io and mythicpl.us collaboration": {
            es: "una colaboración de raider.io y mythicpl.us",
            pt: "com a colaboração de raider.io e mythicpl.us",
            fr: "une collaboration entre raider.io et mythicpl.us"
        },

        "Take a look back at all the juicy mythic plus stats from Legion": {
            es: "Pincha en el título y echa un vistazo a todas las jugosas estadísticas de las míticas plus desde Legion",
            pt: "Click no título para dar uma olhada nas deliciosas estatísitcas das míticas plus desde Legion",
            fr: "Jetez un œil à toutes ces savoureuses statistiques de mythique plus de Legion"
        },

        "What is an \"affix\"?": {
            es: "¿Qué es un \"afijo\"?",
            pt: "O que é um afixo?",
            fr: "Qu'est-ce qu'un \"affixe\" ?"
        },

        "An affix is a modifier applied to a mythic keystone at set levels. Different combinations occur every week, with the combinations eventually repeating on a set schedule.": {
            es: "Un afijo es un modificador aplicado a una piedra angular mítica en niveles establecidos. Diferentes combinaciones ocurren cada semana, con las combinaciones eventualmente repitiéndose en un horario establecido.",
            pt: "Um afixo é um modificador aplicado a uma pedra-chave mítica em níveis estabelecidos. Diferentes combinações acontecem a cada semana, estas combinações eventualmente se repetem em dias e horários estabelecidos.",
            fr: "Un affixe est un modificateur appliqué à une clé mythique à des niveaux donnés. Ces combinations différentes changent chaque semaine, pour au final se répéter selon un calendrier préféfini."
        },

        "Explaining affix difficulty": {
            es: "Explicando la dificultad los afijos",
            pt: "Explicando sobre a dificudade dos afixos",
            fr: "Explications sur la difficulté des affixes"
        },

        "Affix difficulty ratings are <strong>crowdsourced</strong>, meaning they are assigned a difficulty based on user feedback. I will be rolling out a new survey when we've seen more of the affixes and how they play in the new dungeons.": {
            es: "Las calificaciones de dificultad de los afijos son basadas en <strong>colaboración</strong>, lo que significa que se les asigna una dificultad en función de los comentarios de los usuarios. Voy a lanzar una nueva encuesta cuando veamos más afijos y cómo se juegan en las nuevas mazmorras.",
            pt: "As qualificações de dificuldade dos afixos são baseadas em <strong>colaboração</strong>, isto significa que se assocíe uma dificuldade em função dos comentários dos usuários. Vou lançar uma nova enquete ao identificar mais enquetes e como atuam nas novas masmorras.",
            fr: "Les estimations de difficulté des affixes sont réalisées <strong>collaborativement</strong>, ce qui signifie qu'elles sont assignées selon les retours des utilisateurs. Je lancerai un nouveau sondage lorsque l'on aura vu plus en détails les nouveaux affixes et leur impact sur les donjons."
        },

        "(these occur on all keystones, alternating weekly)": {
            es: "(estos afijos salen en todas las piedras, y se alternan semanalmente)",
            pt: "(estes afixos aparecem em todas as pedra-chave e se alternam semanalmente)",
            fr: "(ces affixes sont présents sur toutes les clés mythiques, et alternent d'une semaine à l'autre)"
        },

        "(one affix will occur at +4 per week)": {
            es: "(un afijo semanal a partir de una piedra +4 por semana)",
            pt: "(um afixo semanal a partir de uma pedra +4)",
            fr: "(un affixe se rajoute à partir de +4 chaque semaine)"
        },

        "(one affix will occur at +7 per week)": {
            es: "(un afijo semanal a partir de una piedra +7 por semana)",
            pt: "(um afixo semanal a partir de uma pedra +7)",
            fr: "(un affixe se rajoute à partir de +7 chaque semaine)"
        },

        "(these occur on all keystones throughout the season at keystone level 10 and do not rotate weekly for the duration of the season)": {
            es: "(estos afijos ocurren en todas las piedras angulares a lo largo de la temporada en el nivel +10 y no rotan semanalmente durante esta temporada)",
            pt: "(estes afixos aparecem em todas as pedras-chave ao longo da temporada nas pedras-chave de nível +10 e não rotam semanalmente durante a temporada)",
            fr: "(ces affixes sont présents sur toutes les clés mythiques tout au long de la saison à un niveau de clé +10 et ne changent pas hebdomadairement pendant toute la saison)"
        },

        "Changelog": {
            es: "Historial de cambios",
            pt: "Histórico de mudanças",
            fr: "Historique des modifications"
        },

        "1-31-2020: We up to date for Season 4! Thanks to everyone who contributed via Discord, GitHub, and email!": {
            es: "31-01-2020: Lo hemos actualizado para la cuarta temporada. ¡Muchas gracias a todos que contribuyeron via Discord, GitHub y correos!",
            pt: "31-01-2020: Atualizamos o site para a quarta temporada. Muito obrigado a todos que contribuiram por Discord, GitHub e e-mails!",
            fr: "31/01/2020 : Nous sommes à jour pour la Saison 4 ! Merci à toutes les personnes ayant contribué via Discord, GitHub, et par email !"
        },

        "2-12-2020: Forgot to mention a few changes:": {
            es: "12-02-2020: Se me pasó comentar algunos cambios:",
            pt: "12-02-2020: Esqueci de comentar algumas mudanças:",
            fr: "12/02/2020 : J'ai oublié de mentionner quelques changements :"
        },

        "Streamlined page load (now pulls from a cached API call instead of forcing clients to call the raider.io API. I should have done this a long time ago, thanks for putting up with my shit, Jah!)": {
            es: "Optimización de la carga de la página (ahora inovca por una caché la API de raider.io en lugar de forzar los clientes a invocarla. Debería haberlo hecho hace rato, gracias por soportarlo.)",
            pt: "Otimização do carregamento da página (agora usa um cache da API de raider.io em vez de forçar a invocação no cliente. Deveria ter feito isto faz tempo, mas não. Obrigado por esperar a correção.) ",
            fr: "Optimisation du chargement de la page (informations maintenant récupérées d'un appel à l'API en cache plutôt que de forcer les clients à appeler l'API de raider.io. J'aurais dû faire ça il y a longtemps, merci de m'avoir supporté Jah !)"
        },

        "Removed Google analytics/tracking! (I should have also done this a long time ago. Thanks for putting up with my shit, everyone!)": {
            es: "Removido tracking de Google Analytics (debería haberlo hecho hace rato. ¡Gracias a todos por soportarlo!)",
            pt: "Eliminados os trackings de Google Analytics (já deveria ter feito isto faz tempo. Obrigado por entender-lo)",
            fr: "Suppression du traçage et de Google analytics ! (J'aurais dû faire ça il y a longtemps, merci à tous de m'avoir supporté !)"
        },        

        "Filled out affix schedule.": {
            es: "Ajustado el calendario de afijos.",
            pt: "Ajustando o calendario de afixos",
            fr: "Mise à jour du calendrier des affixes."
        },

        "Lots of proofreading.": {
            es: "Muchas correciones",
            pt: "Muitos ajustes",
            fr: "Beaucoup de corrections."
        },

        "Added group comp. section": {
            es: "Sección 'Consideraciones de grupo' añadida",
            pt: "Nova sessão 'Consideraçoes de grupo",
            fr: "Ajout d'une section pour les compositions de groupe."
        },

        "Clarified examples": {
            es: "Aclaración de ejemplos",
            pt: "Melhor explicação nos exemplos",
            fr: "Clarification des exemples"
        },

        "Fixed loot (shoutouts to Blake!)": {
            es: "Botín arreglado (¡gracias a Blake!)",
            pt: "Loot corrigido (obrigado Blake!",
            fr: "Correction du butin (merci Blake !)"
        },

        "Fixed timers (shoutouts to Veana!)": {
            es: "Temporizadores arreglados (¡gracias a Veana!)",
            pt: "Temorizadores corrigidos (obrigado Veana!)",
            fr: "Correction des chronomètres (merci Veana !)"
        },

        "Noted that the multiple pieces of gear change was reverted": {
            es: "Apunte de que el botín de múltiples piezas se revirtieron",
            pt: "Nota de que o loot de múltiplos item foi revertido",
            fr: "À noter que le changement des multiples pièces d'équipement a été annulé"
        },

        "New translations added.": {
            es: "Nuevas traducciones añadidas",
            pt: "Novas frases traduzidas",
            fr: "Ajout de nouvelles traductions."
        },

        //Menu
        "Open Menu": {
            es: "Abrir menú",
            pt: "Abrir menu",
            fr: "Ouvrir le menu"
        },
        "Affixes": {
            es: "Afijos",
            pt: "Afixos",
            fr: "Affixes"
        },
        "Resources": {
            es: "Recursos",
            pt: "Ferramentas",
            fr: "Ressources"
        },
        "Loot": {
            es: "Botín",
            pt: "Saqueio",
            fr: "Butin"
        },

        "De Other Side": {
            es: "El Otro Lado",
            pt: "O Outro Lado",
            fr: "l'Autre côté"
        },
        "Halls of Atonement": {
            es: "Salas de la Expiación",
            pt: "Salões da Expiação",
            fr: "Salles de l'expiation"
        },
        "Mists of Tirna Scithe": {
            es: "Nieblas de Tirna Scithe",
            pt: "Brumas de Tirna Scithe",
            fr: "Brumes de Tirna Scithe"
        },
        "Plaguefall": {
            es: "Bajapeste",
            pt: "Empéstia",
            fr: "Malpeste"
        },
        "Sanguine Depths": {
            es: "Cavernas Sanguinas",
            pt: "Profundezas Sanguinárias",
            fr: "Profondeurs sanguines"
        },
        "Spires of Ascension": {
            es: "Agujas de Ascensión",
            pt: "Torres da Ascensão",
            fr: "Flèches de l'Ascension"
        },
        "The Necrotic Wake": {
            es: "Estela Necrótica",
            pt: "A Chaga Necrótica",
            fr: "Sillage nécrotique"
        },
        "Theater of Pain": {
            es: "Teatro del Dolor",
            pt: "Teatro da Dor",
            fr: "Théâtre de la souffrance"
        },
        
        //Weeks
        "This Week": {
            es: "Esta semana",
            pt: "Esta semana",
            fr: "Cette semaine"
        },

        "Next week": {
            es: "Próxima semana",
            pt: "Próxima semana",
            fr: "Semaine prochaine"
        },

        "Week after next": {
            es: "Semana contígua",
            pt: "Semana depois da próxima",
            fr: "Semaine suivante"
        },


        //Affixes effects

        "Affix effects": {
            es: "Efectos de los afijos",
            pt: "Efeitos dos afixos",
            fr: "Effets des affixes"
        },

        "Legend: ": {
            es: "Dificultad: ",
            pt: "Dificuldade: ",
            fr: "Légende : "
        },

        "easy difficulty": {
            es: "Fácil",
            pt: "Baixa",
            fr: "difficulté facile"
        },

        "medium difficulty": {
            es: "Media",
            pt: "Média",
            fr: "difficulté moyenne"
        },

        "hard difficulty": {
            es: "Alta",
            pt: "Alta",
            fr: "difficulté élevée"
        },

        "Easy": {
            es: "Fácil",
            pt: "Baixa",
            fr: "Facile"
        },

        "Medium": {
            es: "Media",
            pt: "Média",
            fr: "Moyen"
        },

        "Hard": {
            es: "Alta",
            pt: "Alta",
            fr: "Difficile"
        },

        "HP and Damage scaling per keystone level": {
            es: "Escala de Salud y Daño por nivel de Piedra angular mítica",
            pt: "Escala de HP e Dano por nível de Pedra-chave mítica",
            fr: "Augmentation des PV et des dégâts par niveau de clé mythique"
        },

        "Short survey to get your feedback on affix difficulty": {
            es: "Rellena la encuesta rápida (en inglés) para que tengamos tus opiniones sobre la dificultad de afijos",
            pt: "Preencha uma enquete rápida (em inglês) para que possamos ter um feedback sobre as dificuldades de afixos",
            fr: "Sondage rapide pour avoir votre avis sur la difficulté des affixes"
        },

        "Curious about how I applied the results? Check ": {
            es: "¿Interesado en saber cómo obtuve los resultados? Compruébalo ",
            pt: "Interessado em descubrir como obtive os resultados? Comprovar ",
            fr: "Curieux sur comment j'ai appliqué les résultats ? Regardez "
        },

        "here!": {
            es: "aquí!",
            pt: "aqui!",
            fr: "ici !"
        },

        "Level 2 affixes ": {
            es: "Nivel 2 - Afijos ",
            pt: "Nível 2 - Afixos ",
            fr: "Affixes de niveau 2"
        },

        "Level 4 affixes ": {
            es: "Nivel 4 - Afijos ",
            pt: "Nível 4 - Afixos ",
            fr: "Affixes de niveau 4"
        },

        "(these occur at +4 keystones)": {
            es: "(A partir de una piedra angular +4)",
            pt: "(desde uma pedra-chave +4)",
            fr: "(ceux-ci arrivent à partir des clés mythiques +4)"
        },

        "Level 7 affixes ": {
            es: "Nivel 7 - Afijos ",
            pt: "Nível 7 - Afixos ",
            fr: "Affixes de niveau 7"
        },

        "(these occur at +7 keystones)": {
            es: "(A partir de una piedra angular +7)",
            pt: "(desde uma pedra-chave +7)",
            fr: "(ceux-ci arrivent à partir des clés mythiques +7)"
        },

        "Seasonal affixes (+10)": {
            es: "Nivel 10 - Afijos de temporada",
            pt: "Nível 10 - Afixos sazonais",
            fr: "Affixes saisonniers (+10)"
        },

        "(these occur at +10 keystones)": {
            es: "(A partir de una piedra angular +10)",
            pt: "(desde uma pedra-chave +10)",
            fr: "(ceux-ci arrivent à partir des clés mythiques +10)"
        },

        // Affix details
        // Level 2

        "Fortified": {
            es: "Reforzada",
            pt: "Fortificada",
            fr: "Fortifié"
        },

        fortified_info: {
            en: "Non-bosses have more health and deal 30% more damage.",
            es: "Los enemigos que no son jefes tienen un 20% más de salud e infligen hasta un 30% más de daño.",
            pt: "Inimigos que não são chefes têm 20% mais pontos de vida e causam até 30% a mais de dano.",
            fr: "Les ennemis normaux ont 20% de points de vie supplémentaires et leurs dégâts sont augmentés d'au maximum 30%."
        },

        fortified_note: {
            en: "Note: interrupting and dodging any/all trash mob abilities becomes an absolute priority with this affix. Most of the time spent in the dungeon will be fighting beefy trash, don't be afraid to use CDs.",
            es: "Nota: Interrumpir y esquivar la mayoría (o todas) las habilidades de los pulls se convierte en una prioridad absoluta con este afijo. La mayor parte del tiempo que pases en la mazmorra lucharás duramente contra los pulls, así que por favor, usa tus CDs.",
            pt: "Nota: Interromper e esquivar a maioria (ou todas) as habilidades dos mobs são prioridade absoluta com este afixo. A maior parte do tempo dentro da masmorra estarás em combate puramente com mobs, não economize os CDs.",
            fr: "Note : interrompre et esquiver le maximum (voire toutes) les capacités des ennemis devient une priorité absolue avec cet affixe. La majorité du temps passé dans le donjon sera passée à combattre des ennemis normaux survitaminés, ne soyez pas avare sur l'utilisation de vous CDs."
        },

        "Tyrannical": {
            es: "Tiránica",
            pt: "Tirânica",
            fr: "Tyrannique"
        },

        tyrannical_info: {
            en: "Bosses have 30% more health and deal 15% more damage.",
            es: "Los jefes enemigos tienen un 40% más de salud e infligen hasta un 15% más de daño.",
            pt: "Inimigos chefes têm 40% a mais de vida e causam até 15% a mais de dano.",
            fr: "Les boss ont 30% de points de vie supplémentaires. Les dégâts des boss et de leurs séides sont augmentés de 15% au maximum."
        },

        tyrannical_note: {
            en: "Note: Boss abilities are no longer trivial. Boss mechanics need to be done or people will die. Some fights become endurance tests because they last so long.",
            es: "Nota: Las habilidades de los jefes ya no son triviales. La mecánica del jefe debe hacerse o se morirá \"la people\". Algunas peleas se convierten en pruebas de resistencia porque duran mucho tiempo.",
            pt: "Nota: As habilidades dos chefe não são mais triviais. As mecânicas do chefe precisam ser feitas ou verás gente morta :). Alguns combates se tornam verdadeiras provas de resistência (e não é do BBB) porque duram muito tempo.",
            fr: "Note : les capacités des boss ne sont dorénavant plus triviales. Les mécaniques des boss doivent être correctement gérées sous peine de perdre des gens. Certains combats deviennent de véritables tests d'endurances tellement ils durent longtemps."
        },

        // Level 4

        "Bolstering": {
            es: "Potenciante",
            pt: "Encorajadora",
            fr: "Galvanisant"
        },

        bolstering_info: {
            en: "Non-boss enemies buff nearby allies on death, increasing maximum health by 15% and damage by 20%. This effect lasts 20 seconds and stacks.",
            es: "Cuando un enemigo que no es un jefe muere, su grito al morir potencia a los aliados cercanos, lo que aumenta su salud máximos un 15% y su daño un 20%. Radio del grito 30 metros.",
            pt: "Quando um inimigo que não é chefe morre, os aliados a 30 metros dele recebem um bônus que aumenta sua vida máxima em 15% e seu dano em 20%, e o efeito acumula.",
            fr: "Quand un ennemi normal meurt, son cri d'agonie renforce ses alliés proches, ce qui augmente temporairement leur maximum de points de vie de 15% et leurs dégâts de 20% pendant 20 secondes. Cumulable."
        },

        bolstering_note: {
            en: "Note: it's important to kill all the trash in a pull as closely together as possible with this affix so one mob doesn't become an absolute unit. Adds spawned from a trash mob or boss ability do not trigger bolster.",
            es: "Nota: Es importante intentar matar todo el pull a la vez para no potenciar a los enemigos cercanos. Los enemigos adicionales que aparecen en un combate contra un jefe de mazmorra no son afectados por la Potenciante.",
            pt: "Nota: É necessário tentar balancear o dano de forma que todos os inimigos morram juntos evitando potenciar os que estao ao redor. Os inimigos que aparecem junto com o chefe da masmorra não são afetados pela Encorajadora.",
            fr: "Note : Il est important de tuer tous les ennemis normaux le dans le laps de temps le plus court possible avec cet affixe pour éviter qu'un de ces ennemis ne devienne un boss à part entière. Les invocations des ennemis normaux ou des boss ne provoquent pas Galvanisant."
        },

        "Bursting": {
            es: "Detonante",
            pt: "Explosivo",
            fr: "Détonant"
        },

        bursting_info: {
            en: "Non-boss enemies explode on death, causing all players to suffer flat damage that scales with keystone level. This effect stacks.",
            es: "Al morir, los enemigos que no son jefes explotan, por lo que todos los jugadores reciben un 14% de su salud máxima como daño durante 4 s. Este efecto se acumula.",
            pt: "Quando mortos, inimigos que não são chefes explodem, fazendo com que todos os jogadores recebam dano equivalente a 14% do máximo de pontos de vida ao longo de 4 s. Este efeito acumula.",
            fr: "Quand un ennemi normal meurt, il explose et inflige des dégâts aux personnages-joueurs pendant 4 secondes. Effet cumulable."
        },

        bursting_note: {
            en: "Note: This effect stacks, so it is safest to let the stacks drop before killing multiple enemies. Now dispellable!",
            es: "Nota: Este afijo parece que ignora el rango y columneo. Así que cuidado.",
            pt: "Nota: Este afixo parece que ignora o alcance. Portanto cuidado!",
            fr: "Note : Cet effet est cumulable, donc il est plus prudent de laisser l'effet se terminer avant de tuer plusieurs ennemis. Maintenant dissipable !"
        },

        "Inspiring": {
            es: "Inspiradora",
            pt: "Inspiradora",
            fr: "Inspirant"
        },

        inspiring_info: {
            en: "Some non-boss enemies will have an aura that makes their nearby allies immune to crowd control effects.",
            es: "Algunos enemigos que no son jefes tienen una presencia inspiradora que refuerza a sus aliados.",
            pt: "Alguns inimigos normais têm uma presença inspiradora que fortalece os aliados.",
            fr: "Certains ennemis normaux ont une présence exaltante qui galvanise leurs alliés."
        },

        inspiring_note: {
            en: "Note: The <b>Inspiring Presence</b> buff makes mobs immune to crowd control. The mobs that have this buff appear to be fixed (as in they will always be the same every time), and do not apply this buff to themselves.",
            es: " ",
            pt: " ",
            fr: "Note : L'amélioration <b>Présence inspirante</b> inspire les alliés à moins de 15 mètres et les immunise contre les effets de contrôle. Les ennemis concernés sont fixes (dans le sens où ce seront toujours les mêmes), et ne sont pas concernés par l'immunité aux contrôles."
        },

        "Raging": {
            es: "Furibunda",
            pt: "Enraivecedora",
            fr: "Déchaîné"
        },

        raging_info: {
            en: "Non-boss enemies enrage at 30% health, dealing 75% increased damage until killed.",
            es: "Los enemigos que no son jefes se enfuceren cuando alcanzan un 30% de salud, por lo que infligen un 75% más de daño hasta que sean derrotados.",
            pt: "Os Inimigos que não são chefes ficam enfurecidos ao alcançar 30% de vida, causando 75% mais de dano até serem derrotados.",
            fr: "Les ennemis normaux deviennent enragés à 30% de points de vie, ce qui augmente leurs dégâts de 50% jusqu'à leur mort."
        },

        raging_note: {
            en: "Note: mobs with high damage targeted abilities or high damage AoE abilities become deadly with this affix. Be sure to focus fire mobs down so there aren't multiple enraged mobs at once. Soothe effects remove the enrage!",
            es: "Nota: los enemigos con habilidades que hacen mucho daño AoE o daño directo son mortales con este afijo. Asegúrate de hacer bien el foco e intenta reservar los stuns y ccs cuando estén enfurecidos. Caso se curen después de enfurecerse, seguirán enfucecidos hasta que mueran.",
            pt: "Nota: inimigos com habilidades que causam muito dano em áreas ou direto são mortais com este afixo. Garanta que o foco principal esteja morto e guarde algum aturdir e cc para quando estiverem enfurecidos. Se os enemigos se curam depois de potenciar-se, seguirão potenciados até que morram.",
            fr: "Note : les ennemis ayant des capacités ciblées ou de zone faisant beaucoup de dégâts deviennent mortels avec cet affixe. Prenez garde à vous concentrer sur un ennemi à la fois pour éviter que plusieurs deviennent enragés en même temps. Les effets d'apaisement retirent la rage !"
        },

        "Sanguine": {
            es: "Sanguina",
            pt: "Sanguínea",
            fr: "Sanguin"
        },

        sanguine_info: {
            en: "Shortly after death, non-boss enemies will leave a pool of blood on the ground. This pool heals enemies and damages players for a % of their maximum health.",
            es: "Al morir, los enemigos que no son jefes dejan debajo suyo un charco persistente de icor que sana a sus aliados e inflige daño a los jugadores.",
            pt: "Ao morrer, inimigos que não-chefes deixam debaixo uma poça de sangue que cura aos aliados e causa dano aos jogadores.",
            fr: "Quand un ennemi normal meurt, il laisse derrière lui une flaque d'ichor qui soigne ses alliés et inflige des dégâts aux personnages-joueurs."
        },

        sanguine_note: {
            en: "Note:  The pool's radius is 8 yds. Pools last 20 seconds.",
            es: " ",
            pt: " ",
            fr: "Note : la flaque laissée par terre a un rayon de 8 mètres. Les flaques restent au sol pour 20 secondes, durant lesquelles elles rendent 5% de leurs maximum de PV aux créatures et font l'équivalent de 15% des PV maximum des joueurs en dégâts toutes les secondes."
        },

        "Spiteful": {
            es: "Rencorosa",
            pt: "Detestável",
            fr: "Malveillant"
        },

        spiteful_info: {
            en: "Spirits rise from the corpses of non-boss enemies and chase down random players, dealing <b>HEAVY</b> melee damage.",
            es: "De los cadáveres de enemigos que no son jefes surgen malignos que persiguen a jugadores al azar.",
            pt: "Demônios se erguem dos corpos de inimigos normais para perseguir jogadores aleatórios.",
            fr: "Des démons surgissent des cadavres d'ennemis normaux et poursuivent des personnages-joueurs aléatoires."
        },

        spiteful_note: {
            en: "Note: Whenever a mob dies, it spawns a <i>Spiteful Shade</i> that will fixate on a random player. Their health and damage scales with keystone level. They lose 8% of their HP every second and can be crowd controlled.",
            es: " ",
            pt: " ",
            fr: "Note : lorsqu'un ennemi meurt, il fait apparaître une <i>Ombre malveillante<i> qui va se concentrer sur un joueur aléatoire. Leurs points de vie et leurs dégâts sont proportionnels au niveau de clé mythique. Elles perdent 8% de leur maximum de PV chaque seconde et peuvent être contrôlées."
        },

        // Level 7

        "Explosive": {
            es: "Explosiva",
            pt: "Explosiva",
            fr: "Explosif"
        },

        explosive_info: {
            en: "Creatures have a chance to summon an Explosive Orb nearby that will explode after six seconds, inflicting damage 40% of the player's maximum health as damage.",
            es: "Mientras están en combate, los enemigos invocan de forma periódica orbes explosivos que detonan si nadie los destruye.",
            pt: "Em combate, os inimigos evocam periodicamente orbes Explosivos que explodirão se não forem destruídos.",
            fr: "En combat, les ennemis invoquent périodiquement des orbes explosifs qui détonent s'ils ne sont pas détruits."
        },

        explosive_note: {
            en: "Note: The explosive orb will spawn and begin casting a six second cast. If the cast goes off, the entire party will take 40% of their max hp in damage. They are <strong>AOE immune so you can't cleave them down!</strong> They can also spawn on boss fights. In Shadowlands, these orbs spawn at a slightly greater distance away from the enemy that spawns them.",
            es: "Nota: Un orbe explosivo aparece con un lanzamiento de hechizo de 6 segundos. Si el orbe castea, todo el grupo recibirá un daño del 40% de salud máxima. ¡Estos son <strong>inmunes al daño en áreas, o sea cleave no funciona!</strong> Los orbes pueden aparecer en combates con jefes.",
            pt: "Nota: Um orbe explosivo surge com um lançamento de magia de 6 segundos. Caso o orbe finalize o lançamento, todo o grupo recebe um dano de 40% de sua saúde máxima. Eles são <strong>imunes ao dano em áreas ou cleave</strong> Los orbes pueden aparecer en combates con jefes.",
            fr: "Note : L'orbe explosif va apparaître et commencer à incanter un sort de 6 secondes. Si cette incantation se termine, tous les joueurs à portée et en ligne de vue vont subir des dégâts équivalents à 40% de leur maximum de PV. Ces orbes <b>ne sont pas sensibles aux sorts de zones</b>. Ils peuvent également apparaître pendant des combats avec des boss. À Shadowlands, ces orbes apparaîssent un peu plus loin de l'ennemi qui les invoque que lors des précédentes extensions."
        },

        "Grievous": {
            es: "Dolorosa",
            pt: "Atrocidade",
            fr: "Aggravé"
        },

        grievous_info: {
            en: "While below 90% health, players are afflicted with <b>Grievous Wound</b>.",
            es: "Cuando estáis heridos y os queda menos del 90% de salud, recibiréis daño creciente en el tiempo hasta que os curen y recuperéis al menos el 90% de esta.",
            pt: "Quando são feridos e chegam a menos de 90% dos pontos de vida, os jogadores sofrem dano crescente ao longo do tempo até serem curados acima de 90% dos pontos de vida.",
            fr: "Les personnages-joueurs sous 90% de PV subissent des dégâts sur la durée croissants jusqu'à ce qu'ils soient soignés."
        },

        grievous_note: {
            en: "Note: You bleed until you are healed above 90%. Does flat damage that scales with keystone level. Direct heals remove one stack of <b>Grievous Wound</b>.",
            es: " ",
            pt: " ",
            fr: "Note : Vous allez saigner et subir des dégâts physiques jusqu'à être ramené par des soins au-dessus de 90% de votre maximum de points de vie. Les soins directs suppriment 1 charge de blessure."
        },

        "Necrotic": {
            es: "Necrótica",
            pt: "Necrótica",
            fr: "Nécrotique"
        },

        necrotic_info: {
            en: "Enemy melee attacks apply a stacking debuff that deals damage and reduces healing received. Debuff lasts 6 seconds and is dispelled when exiting combat.",
            es: "Todos los ataques cuerpo a cuerpo de los enemigos aplican un añublo que se acumula, inflige daño en el tiempo y reduce la sanación recibida.",
            pt: "Todos os ataques corpo a corpo dos inimigos aplicam uma praga cumulativa que causa dano ao longo do tempo e reduz a cura recebida.",
            fr: "Les attaques de mêlée des ennemis appliquent un chancre cumulable qui inflige des dégâts sur la durée et réduit les soins reçus."
        },

        necrotic_note: {
            en: "Note: Strong AoE CC or slows are great for this affix to allow for kiting mobs while the tank's Necrotic stacks fall off. Bosses only apply necrotic on every other melee hit.",
            es: "Nota: Está muy bien utilizar correctamente los CCs en áreas y ralentizaciones con este afijo para permitir kitear bien los pulls mientras el tanque se limpia de las cargas de Necrótica.",
            pt: "Nota: É importante utilizar corretamente os CCs de controle massivo e redução de velocidade dos inimigos para permitir que o tanque possa fugir. Desta forma ele pode limpar-se das cargas necróticas.",
            fr: "Note : des sorts de contrôle de zone ou de ralentissement sont très utiles pour permettre au tank de quitter la mêlée afin de perdre ses blessures nécrotiques. Les boss n'appliquent ces blessures qu'une attaque en mêlée sur deux."
        },

        "Quaking": {
            es: "Sísmica",
            pt: "Estremecendo",
            fr: "Sismique"
        },

        quaking_info: {
            en: "Players will periodically Quake, interrupting spell casts of the player. Nearby allies take 40% of their maximum health as damage",
            es: "Los jugadores emiten una ola de choque de forma periódica, lo que inflige daño e interrumpe a los aliados cercanos.",
            pt: "Os jogadores emitem periodicamente uma onda de choque, causando dano e interrompendo aliados próximos.",
            fr: "Tous les personnages-joueurs émettent régulièrement une onde de choc qui inflige des dégâts aux alliés proches et les interrompt."
        },

        quaking_note: {
            en: "Note: spread out when you get a circle on you.",
            es: "Nota: Separaos. Cuanto más separados estén, mejor. Interrumpe los lanzamientos de hechizos y también el intento de adquirir el buffo de comida.",
            pt: "Nota: Separarem-se!",
            fr: "Note : dispersez-vous lorsque vous voyez un cercle autour de vous."
        },

        "Storming": {
            es: "Tormentosa",
            pt: "Tempestuosa",
            fr: "Tourbillonnant"
        },

        storming_info: {
            en: "Tornadoes spawn around enemy creatures while in combat.",
            es: "Mientras están en combate, los enemigos invocan de forma periódica torbellinos dañinos.",
            pt: "Em combate, os inimigos evocam periodicamente redemoinhos que causam dano.",
            fr: "En combat, les ennemis invoquent périodiquement des tourbillons dévastateurs."
        },

        storming_note: {
            en: "Note: Grey swirlies appear on the floor indicating where a tornado will spawn. If you get hit by the tornado, you take damage and get knocked back and the tornado disappears.",
            es: " ",
            pt: " ",
            fr: "Note : vous allez voir des tourbillons gris au sol indiquant l'endroit où une tornade va apparaître. Si vous êtes touché par une tornade, vous allez prendre des dégâts et être envoyé en l'air, et la tornade va disparaître."
        },

        "Volcanic": {
            es: "Volcánica",
            pt: "Vulcânica",
            fr: "Volcanique"
        },

        volcanic_info: {
            en: "Enemies cause eruptions of flame near distant players. Additional volcanoes may appear near existing volcanoes.",
            es: "Mientras están en combate, los enemigos provocan de forma periódica que surjan llamas bajo los pies de los jugadores distantes.",
            pt: "Enquanto estiverem em combate, os inimigos periodicamente fazem com que glóbulos de fogo surjam sob os pés dos jogadores distantes.",
            fr: "En combat, les ennemis font périodiquement apparaître des gerbes de flammes sous les pieds des personnages-joueurs éloignés."
        },

        volcanic_note: {
            en: "Note: Keep an eye out for the volcano animation under your feet or near you. Sometimes you may not have to move! Knocks you high in to the air in addition to doing damage scaled to the keystone level.",
            es: "Nota: Estate atento a la animación del volcán bajo tus pies o cerca de ti. ¡A veces puede que no tengas que moverte!",
            pt: "Nota: Fique atento as animações do vulcão debaixo dos seus pés ou perto de você. As vezes você nem precisa mover-se!",
            fr: "Note : Faites attention à l'animation du volcan sous vos pieds ou à proximité. Parfois, vous n'aurez même pas à bouger ! Si vous êtes touché, vous serez envoyé dans les airs et prendrez des dégâts proportionnels au niveau de la clé mythique."
        },

        // Level 10 (Season Affixes)

        "Prideful": {
            es: "Orgulloso",
            pt: "Orgulhosa",
            fr: "Orgueilleux"
        },

        prideful_info: {
            en: "Killing enemies fills a progress bar. Every 20% on the bar spawns a <i>Manifestation of Pride</i>. Killing the <i>Manifestation of Pride</i> provides players with a buff.",
            es: "Los jugadores se llenan de orgullo al derrotar a enemigos que no sean jefes y acaban formando una manifestación del orgullo. Si derrotan a esta manifestación, se potencian de manera considerable.",
            pt: "Os jogadores transbordam orgulho ao derrotar inimigos normais, dando origem a uma Manifestação do Orgulho. Derrotar a Manifestação fortalece significativamente os jogadores.",
            fr: "Vaincre des ennemis normaux remplit les personnages-joueurs de fierté, ce qui finit par créer une manifestation de l'orgueil. Vaincre cette manifestation renforce considérablement les personnages-joueurs."
        },

        prideful_note: {
            en: "The buff you get from killing the <i>Manifestation of Pride</i> is pretty good, as it increases Mana Regeneration by 5% per second, damage dealt by 30%, and Movement Speed by 60% for a minute. The <i>Manifestation of Pride</i> has somewhere around 30% of the health of a dungeon boss and does heavy AoE damage every 2 seconds of the fight. You'll probably want to position this enemy to be near a boss or difficult trash pull so you can make the most use of the buff.",
            es: " ",
            pt: " ",
            fr: "L'amélioration que vous gagnez après avoir tué la <i>Manifestation de l'orgueil</i> est plutôt intéressant, puisqu'il augmente la regénération de mana de 5% par seconde, les dégâts faits de 30%, et la vitesse de déplacement de 60% pour une minute."
        },

        "Tormented": {
            es: "Atormentado",
            pt: "Atormentados",
            fr: "Tourmenté"
        },

        tormented_info: {
            en: "Servants of the Jailer can be found throughout the dungeon and grant powerful boons when defeated. If a servant is not dealt with, they empower the final boss.",
            es: " ",
            pt: " ",
            fr: "Les serviteurs du Geôlier qui peuplent l'ensemble du donjon octroient de puissants bonus une fois vaincus. Si un serviteur n'est pas éliminé, il renforce le boss final."
        },

        tormented_note: {
            en: "Four new Lieutenants are available to kill in the dungeon. When you kill a lieutenant, each party member gets an Anima Power. For every lieutenant still up when the final boss is pulled, it will apply an aura that will make the final boss harder.",
            es: " ",
            pt: " ",
            fr: "Quatre lieutenants sont répartis dans le donjon. Lorsque vous tuez un lieutenant, chaque membre du groupe obtient un pouvoir d'Anima. Pour chaque lieutenant toujours vivant lorsque le boss final du donjon est engagé, il va lui conférer une aura qui le rendra d'autant plus difficile à battre."
        },

        "Weekly schedule for affixes": {
            es: "Calendario semanal de afijos",
            pt: "Agenda semanal de afixos",
            fr: "Calendrier hebdomadaire des affixes"
        },

        // Group considerations

        "Group Considerations": {
            es: "Consideraciones de grupos",
            pt: "Considerações de grupo",
            fr: "Considérations de groupe"

        },

        "Group makeup barely matters at low keystone levels. There is little reason to sweat your group composition on keys below 5-6. Bring the player, not the class." : {
            es: "La composición del grupo importa poco en piedras angulares de nivel bajo. No hay motivo para esforzarse en la composición del grupo para piedras menores a 5-6. Trae al jugador, no la clase.",
            pt: "A composição do grupo quase não importa em chaves de nível baixo. Há poucas razões para se esforçar em escolher a composição do seu grupo em chaves menores do que de 5-6. Traga o jogador, não a classe.",
            fr: "La composition d'un groupe n'a que peu d'importance pour un bas niveau de clé mythique. Il n'y a pas de raison de chercher à optimiser son groupe pour des clés de niveau inférieur à 5 ou 6. Venez avec le joueur, pas la classe."
        },

        "That being said, your group composition will always be one tank, one healer, and three DPS. Multi-tank strategies are not viable, no matter how much you think they should be." : {
            es: "Dicho esto, la composición del grupo siempre será de un tanque, un sanador y tres DPS. Estratégias de múltiples tanques no son viables",
            pt: "Dito isto, a composição do seu grupo será sempre um tanque, um healer e três DPS. Estratégias com vários tanques não são viáveis.",
            fr: "Ceci étant dit, votre groupe sera toujours composé d'un tank, d'un soigneur, et de trois DPS. Les stratégies avec plusieurs tanks ne sont pas viables, peu importe à quel point vous pensez qu'elles puissent l'être."
        },

        "It's important to build a group that is well rounded in order increase your chances of completing a keystone within the timer. This means bringing consumables to make up for gaps in your group composition." : {
            es: "Es importante armar un grupo que esté bien nivelado para incrementar las probabilidades de completar una piedra angular en tiempo. Esto significa traer consumibles para suplir las falencias en la composición",
            pt: "É importante criar uma boa composição de grupo para aumentar suas chances de concluir a chave dentro do tempo. Isso significa que trazer consumíveis para compensar as lacunas na composição do seu grupo é importante.",
            fr: "Il est important de créer un groupe qui est équilibré afin d'augmenter vos chances de terminer la clé mythique dans le temps imparti. Cela implique d'utiliser des consommables pour éventuellement pallier à des manquemants dans votre groupe."
        },

        "When considering your group composition, it is also to consider what each class can bring to the table. Does your group have:" : {
            es: "Cuando consideres la composición de tu grupo, recuerda considerar que puede aportar cada clase al grupo. Acaso tu grupo tiene:",
            pt: "Ao considerar a composição do seu grupo, também é necessário considerar o que cada classe pode trazer à mesa. Por acaso o seu grupo tem:",
            fr: "Lorsque vous réfléchissez à votre composition de groupe, il est également important de considérer ce que chaque classe peut apporter. Est-ce que votre groupe contient :"
        },

        "Ways to dispel buffs on enemies?" : {
            es: "Maneras de dispelear buffs en enemigos?",
            pt: "Maneiras de dissipar buffs nos inimigos?",
            fr: "Des moyens de dissiper des améliorations sur les ennemis ?"
        },

        "Ways to dispel debuffs on allies?" : {
            es: "Maneras de dispelear debuffs en aliados?",
            pt: "Maneiras de dissipar debuffs em aliados?",
            fr: "Des moyens de dissiper les altérations sur les alliés ?"
        },

        "Multiple interrupts or other CC to stop enemy casting?" : {
            es: "Múltiples interrupciones y otros CC para evitar el casteo enemigo?",
            pt: "Múltiplas interrupções ou outro CC para interromper a conjuração do inimigo?",
            fr: "De multiples interruptions ou contrôles pour empêcher les ennemis d'incanter des sorts ?"
        },

        "Strong CC for difficult trash pulls?" : {
            es: "CC fuertes para pulls con trash complicada?",
            pt: "CC fortes para pulls difíceis?",
            fr: "Des contrôles de zone pour les pulls difficiles ?"
        },

        group_cons_info: {
            en: "Again, selecting your group carefully matters mostly for higher level keys where the difficulty of the run is often very high. For lower level keystone runs, group makeup is not as important as it is easy to power through most of the content. Just saying. Do what you want. <code>¯\\_(ツ)_/¯</code>",
            es: "De nuevo, seleccionar tu grupo con cuidado importa más para piedras de nivel alto, donde la dificultad es por lo general mayor. Para piedras de nivel bajo, la composición del grupo no es tán importante. Solo digamos. Haz lo que quieras. <code>¯\\_(ツ)_/¯</code>",
            pt: "Mais uma vez, selecionar seu grupo com cuidado é importante principalmente para chaves de nível superior, onde a dificuldade geralmente é muito alta. Para chaves de nível inferior, a composição do grupo não é tão importante quanto é completar a maior parte do conteúdo. Apenas dizendo. Faça o que você quiser. <code>¯\\_(ツ)_/¯</code>",
            fr: "Encore une fois, sélectionner le groupe avec soin n'est important que pour les hauts niveaux de clés où la difficulté du donjon est souvent très haute. Pour les niveaux plus modestes, la composition du groupe n'est pas aussi importante et il est plus facile de simplement taper sur les méchants. Enfin moi ce que j'en dis. Vous faites comme vous le sentez.  <code>¯\\_(ツ)_/¯</code>"
        },

        group_cons_drums: {
            en: "Drums (any tier is fine, they all give 15% haste <sup><a href=\"https://www.icy-veins.com/forums/topic/51841-drums-haste-effects-nerfed-to-15-in-shadowlands/\">[source]</a></sup>): sorta makes up for no Bloodlust/Heroism/Time Warp/Hysteria, but the nerf from 25% haste to 15% really hurts the value of drums.",
            es: "Tambores: para suplir a Ansia de sangre/Distorsión temporal/Histeria, etc",
            pt: "Tambores: supre a necessidade de sede de sangue / heroísmo / distorção temporal / histeria, etc.",
            fr: "Tambours (toutes les versions sont viables, elles donnent toutes 15% de hâte <sup><a href=\"https://www.icy-veins.com/forums/topic/51841-drums-haste-effects-nerfed-to-15-in-shadowlands/\">[source]</a></sup>) : peut remplacer une Furie sanguinaire/Héroïsme/Distorsion temporelle/Hystérie ancienne, mais le fait que le bonus ne soit que de 15% plutôt que de 25% est un point noir des tambours."
        },

        "Consumables" : {
            es: "Consumibles",
            pt: "Consumíveis",
            fr: "Consommables"
        },

        "Mandatory (at least above keystone level 10)" : {
            es: "Obligatorio (al menos en piedras mayores a nivel 10)",
            pt: "Obrigatório (pelo menos em chaves acima do nível 10)",
            fr: "Nécessaires (au moins pour les clés au dessus du niveau 10)"
        },

        "Current food" : {
            es: "Comida actual",
            pt: "Comida atual",
            fr: "Nourriture de l'extension en cours"
        },

        "Current flasks" : {
            es: "Frascos actuales",
            pt: "Frascos atuais",
            fr: "Flasques de l'extension en cours"
        },

        "Current potions" : {
            es: "Pociones actuales",
            pt: "Poções atuais",
            fr: "Potions de l'extension en cours"
        },

        "Repair mount/Auto-Hammer/Jeeves/Reeves" : {
            es: "Montura de reparar/Martillo automático/Jeeves/Reeves",
            pt: "Montaria de reparo/Martelo automático/Jeeves/Reeves",
            fr: "Monture permettant de réparer/Auto-marteau/Jeeves/Reeves"
        },

        "\"Missing a class\" consumables": {
            es: "Consumibles para clases faltantes",
            pt: "\"Consumíveis\" para classes faltantes",
            fr: "Consommables \"il manque une classe\""
        },

        "Drums: sorta makes up for no Bloodlust/Heroism/Time Warp/Hysteria, etc. Worse because they only give a 15% haste buff." : {
            es: "Tambores: para suplir a Ansia de sangre/Distorsión temporal/Histeria, etc",
            pt: "Tambores: supre a necessidade de sede de sangue / heroísmo / distorção temporal / histeria, etc.",
            fr: "Tambours : remplace Furie sanguinaire/Héroïsme/Distorsion temporelle/Hystérie ancienne. Moins efficace car ils ne confèrent qu'un bonus de 15% à la hâte."
        },

        "War-Scrolls of Battle Shout (attack power buff), Fortitude (stamina buff), Intellect (intellect buff): makes up for no warrior/priest/mage, respectively" : {
            es: "Pergaminos de guerra de Grito de batalla (buff de poder de ataque), Entereza (buff de aguante), Intelecto (buff de intelecto): para suplir a guerrero/sacerdote/mago, respectivamente",
            pt: "Pergaminho de Guerra do Brado de Batalha (buff de poder de ataque), Fortitude (buff de resistência), Intelecto (buff de intelecto): supre a falta de um guerreiro/sacerdote/mago, respectivamente",
            fr: "Parchemins de guerre de cri de bataille (puissance d'attaque), robustesse (endurance), intelligence (... intelligence) : remplace respectivement les guerriers, prêtres, et mages."
        },

        "Optional/niche/high key consumables" : {
            es: "Opcional/nicho/consumibles para piedras de alto nivel",
            pt: "Consumíveis opcionais/com nicho específico/chaves altas",
            fr: "Consommables optionnels/de niche/utiles en haute clé"
        },

        "Invisibility potions (used for skipping troubling trash packs at high key levels)": {
            es: "Pociones de invisibilidad (usadas para saltear packs de trash problemática en piedras de nivel alto)",
            pt: "Poções de invisibilidade (usadas para pular inimigos problemáticos em níveis mais altos)",
            fr: "Potions d'invisibilité (utilisées pour passer outre des groupes d'ennemis problématiques à haut niveau de clé)"
        },

        "Tome of Tranquil Mind (you are allowed to step out of the instance to change talents using a tome)": {
            es: "Escrito de la mente tranquila (se permite salir de la instancia para cambiar talentos utilizando un escrito)",
            pt: "Tomo da mente tranquila (se estiver fora de combate, permite ajustar os talentos dentro da massamora)",
            fr: "Tome de l'esprit tranquille (vous pouvez sortir de l'instance à pieds pour changer de talents en utilisant un tome)"
        },

        "You can no longer use the Proving Grounds to grab a free Healthstone but you can invite a Warlock to the party before start the dungeon.": {
            es: "Ya no puedes pillar una piedra de salud del Terreno de Pruebas, sin embargo podrás invitar un brujo a la party antes de empezar la mazmorra y obtener la piedra de salud de su pozo.",
            pt: "Não é mais possível lotear pedras da vida no terreno de provas, agora é necessário convidar um bruxo ao grupo e lotar la pedra do poço.",
            fr: " " // This doesn't work in Shadowlands, Healthstone is removed from your bags on key start
        },

        //Valor
        "Valor": {
            es: "Valor",
            pt: "Bravura",
            fr: "Valeur"
        },

        //Useful stuff
        "Useful stuff": {
            es: "Cosas útiles",
            pt: "Coisas úteis",
            fr: "Trucs utiles"
        },

        "Addons": {
            es: "Addons",
            pt: "Add-ons",
            fr: "Addons"
        },

        //GottaGoFast
        " - All-in-one mythic+ timer. Shows % value of mobs on tooltip, timers required for +2/+3 chest and times that objectives are completed.": {
            es: " - Todo en uno para míticas+. Muestra el porcentaje (%) de enemigos no-jefes al pasar el ratón sobre ellos, los temporizadores necesarios para hacer en +2 / +3 cofres y los tiempos en que concluyeron los objetivos.",
            pt: " - Tudo em um para míticas+. Mostra o percentual (%) de inimigos ao passar o mouse sobre eles, cronometro necessário para finalizar com +2 / +3 baús e os tempos de conclusão dos objetivos.",
            fr: " - Chronomètre de mythique+ tout-en-un. Affiche la valeur en pourcentage des ennemis dans l'info-bulle, les temps requis pour +2 et +3 une clé, ainsi que les temps auxquels les objectifs sont complétés."
        },

        //Angry Keystones
        " - Another take on the keystone/mythic+ timer. Displays affix rotation schedule and current affixes as well as providing chest timers and kill count % ingame. Also styles keystone links ingame to show you what dungeon they're for.": {
            es: " - Otra forma de visualizar el temporizador de la mítica+. Muestra el calendario de la rotación de afijos y también los afijos actuales, además de proporcionar temporizadores para los cofres y recuento de muertes de los enemigos no-jefes. También es posible enlazar la piedra en el juego para enseñar las mazmorras y dificultades.",
            pt: " - Outra forma de visualizar o cronometro na mítica+. Mostra uma agenda com a rotaçao dos afixos e também os afixos atuais, além disso disponibiliza o cronometro para os baús e contagem de tropas pendentes. Também é possível linkear pedras-chave com as masmorras e dificuldades.",
            fr: " - Une autre approche du chronomèter mythique+. Affiche la rotation actuelle des affixes ainsi que le calendrier, et fournit les temps requis pour les palliers de réussite ainsi que la valeur en pourcentage des ennemis. De plus, modifie les liens vers les clés mythiques dans le jeu pour afficher le donjon en question."
        },

        "Keystone and group information": {
            es: "Datos sobre piedra angular mítica y grupos",
            pt: "Dados de pedras-chave mítica",
            fr: "Clé mythique et informations de groupe"
        },

        //Method Dungeon Tools
        " - Plan out routes, then use a shareable interactive map to make sure your group is on the same page.": {
            es: " - Planificación de rutas, puedes compartir un mapa interactivo para asegurar que todo el grupo tenga claro la ruta y que hacer la mítica+.",
            pt: " - Planejamento de rota, é possível compartilhar um mapa interativo para assegurar que o grupo saiba como jogar dentro da mazmorra mitica+.",
            fr: " - Planifiez vos routes, et partagez le lien vers votre carte interactive pour vous assurer que vous et votre groupe êtes sur la même longueur d'ondes"
        },        

        //Raider.io Addon
        " - Hover over players in the world, guild, etc and get their raider.io score. The addon comes with an updater client to automatically get people's scores from raider.io!": {
            es: " - Utilizado por muchísimos jugadores y guilds en todo el mundo para obtener scores en raider.io. Este addon viene con un cliente que se actualiza automaticamente con el score más actualizado posible.",
            pt: " - Usado por muitos jugadores e guildas em todo o planeta para obter score no raider.io. Este addon também tem um cliente para atualizar-se automaticamente com o score mais atualizado possível.",
            fr: " - Survolez des joueurs autour de vous, dans votre guilde, etc. et récupérez leur score raider.io. Cet addon peut également être téléchargé avec un client pour automatiquement mettre à jour les scores des joueurs depuis raider.io !"
        },

        //Astral Keys
        " - Shows keys for guild mates, Battle Net friends and alts. It also shows if your friends/guildies have done a 15+ or not!": {
            es: " - Muestra las piedras angulares para compañeros del guild, amigos de Battle.Net y alters. ¡También muestra si tus amigos / compañeros del clan han hecho piedras superiores a una +15 o no!",
            pt: " - Mostra as pedras-chave para as pessoas da guilda, amigos de Battle.Net e alters. Também mostra se seus amigos / pessoas do clan finalizaram pedras-chave superiores a +15 ou não!",
            fr: " - Liste les clés des membres de votre guilde, vos amis Battle Net, et vos autres personnages. Liste également si vos amis ou membres de guilde ont déjà fait une +15 ou pas !"
        },

        //BFA Dungeons
        " - Comprehensive alerts for trash and boss abilities. Covers things bossmods do not. <strong>Absolutely invaluable.</strong>": {
            es: " - Alertas visuales para los habilidades de boses y pulls. Enseña cosas que los addons tipo bossmods no muestra. <strong>Muy recomendable.</strong>",
            pt: " - Alertas visuais para as habilidades dos chefes e pulls. Mostra detalhes que os addons do tipo bossmods não mostram. <strong>Extremamente recomendável.</strong>",
            fr: " - Alertes visuelles pour les capacités des ennemis et des boss. Couvre des choses que les bossmods classiques ne couvrent pas. <strong>Extrêmement recommandé.</strong>"
        },

        //Explosive affix Weakaura
        " - Highlights active explosive orb nameplates and provides a tracker of active explosive orbs.": {
            es: " - Destaca los orbes explosivos activos en los nameplates y enseña também cuantos orbes explositovs están activos.",
            pt: " - Destaca os orbes explosivos ativos nos nameplates e exibe também quantos orbes explositovs estam ativos.",
            fr: " - Met en avant les nameplates des orbes explosifs et fournit un compteur des orbes actifs."
        },

        //TimeToDie
        " - A no frills time-to-target-death indicator. Useful for timing cooldowns, etc.": {
            es: " - Un indicador de tiempo sencillo hasta la muerte objetivo. Útil para cronometrar cooldowns, etc.",
            pt: " - Indicador de tempo restante até a morte do objetivo. Útil para controlar os cooldowns, CDs, etc.",
            fr: " - Un indicateur du temps estimé restant avant la mort de la cible. Pratique pour pouvoir synchroniser l'utilisation de CDs, etc."
        },

        //RaidCDs WeakAura
        " - A WeakAura to track raid/group utility CDs (i.e Barkskin, Blessing of Sacrifice, etc).": {
            es: " - Utilizado para el controla de las utilidades y CDs existentes (ejemplo: Barkskin, Sacrifice, etc.).",
            pt: " - Utilizado para controlar as utilidades e CDs existentes (exemplo: Barkskin, Sacrifice, etc.).",
            fr: " - Un WeakAura utilisé pour suivre les sorts utilitaires des membres du groupe ou du raid (i.e. Écorcefer, Bénédiction de sacrifice, etc.)"
        },

        //Effective Health
        " - It shows you how much physical and magic damage you can take. Based on current health, absorbs, and defensive cooldowns from yourself and others.": {
            es: " - Enseña cuanto daño físico y mágico puedes aguantar. Está basado en tu vida actual, absorsión y cooldowns defensivos tuyos y de tu equipo.",
            pt: " - Mostra quanto dano fisico e mágico você pode anguentar. Está baseado na tua vida atual, absorção e cooldowns defensivos, teu e também do seu time.",
            fr: " - Affiche le montant de dégâts physiques et magiques que vous pouvez encaisser. Se base sur les points de vie actuels, absorptions, et sorts défensifs."
        },

        //raider.io
        " - Raider.io has all kinds of tools including character specific M+ tracking, successful run comp tracking, and ranks for m+ dungeons. <strong>Community created!</strong> Their <a href=\"https://raider.io/addon\">addon</a> is probably the most useful group building/vetting addon you'll find as it uses their scoring system to show you how experienced players are.": {
            es: " - Posee todo tipo de herramienta incluyendo personajes específicos para controlar las míticas+, rankings, etc. <strong>Comunidade creada</strong>. Su <a href=\"https://raider.io/addon\">addon</a> es sin duda el más utilizado para construir un grupo de cara a encontrar personas con el score y experiencia de jugadores necesaria para asumarse a tu grupo de míticas+.",
            pt: " - Possuem varios tipos de ferramentas incluindo personagens específicos para controlar as míticas+, rankings, etc. <strong>Comunidade criada</strong>. Seu <a href=\"https://raider.io/addon\">addon</a> sem dúvida é o mais utilizado para formar um grupo e encontrar pessoas com score e experiencia necessária para entrar em seu grupo de míticas+.",
            fr: " - Raider.io intègre tout un tas d'outils utiles au suivi M+ de personnages, comme par exemple les donjons réussis et les rangs de ceux-ci. <strong>Créé par la communauté !</strong> Leur  <a href=\"https://raider.io/addon\">addon</a> est probablement l'outil le plus utile lorsque vous cherchez à construire votre groupe, et le système de score vous permet de rapidement estimer à quel point un joueur est expérimenté."
        },

        //Questionably Epic
        " - Easy-to-digest dungeon guides and an <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> that provides tips and strategy reminders throughout dungeons. <strong>Community created!</strong>": {
            es: " - Guia de mazmorra con un <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> facil de entender. Dispone de consejos, estrategias y ayuda para avanzar en las mazmorras.",
            pt: " - Guia de dungeon com um <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> facil de compreender. Contém conselhos, estrategias e ajuda para avançar nas dungeons.",
            fr: " - Guides faciles à parcourir ainsi qu'un <a href=\"https://wow.curseforge.com/projects/qe-dungeon-tips\">addon</a> qui fournit des trucs et astuces au cours des donjons. <strong>Créé par la communauté !</strong>"
        },

        //MPH
        " - (Mythic Plus Helper) Looks up group candidates and returns item level equipped/highest, total mythic plus runs and Heart of Azeroth level! Be sure to get the <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> for ease of use. <strong>Community created!</strong>": {
            es: " - Ayuda a buscar grupos y candidatos además de contestar con el item level más alto equipado, total de míticas plus realizadas y el nível do colar. Debes descargar el <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> de cara a facilitar su utilización.",
            pt: " - Ajuda a buscar grupos e candidatos e responde com o item level mais alto equipado, total de míticas plus feitas e o nível do colar. Deve baixar o <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> para facilitar seu uso.",
            fr: " - (Mythic Plus Helper) Vous permet d'inspecter des candidats et vous retourne leur niveau d'objet, le nombre total de donjons effectués en mythique+, etc. N'oubliez pas l'<a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> pour la simplicité d'utilisation. <strong>Créé par la communauté !</strong>"
        },

        //Mythic+ Friends Discord
        " - The largest M+ Discord server aimed at helping players form groups and teaching new players about mythic plus.": {
            es: " - El mayor servidor de Discord de míticas+ que ayudan a jugadores y grupos además de enseñar a nuevos jugadores que desean hacer míticas+.",
            pt: " - O maior servidor de Discord de míticas+ onde ajudam a jogadores e grupos que desejam aprender e avançar nos conhecimentos das táticas das míticas+."
            fr: " - Le plus important serveur Discord dont le but est d'aider les joueurs à former des groupes et à apprendre le mytique+ aux néophytes."
        },

        //Mythic+ EU
        " - Mythic plus group finder server for the EU.": {
            es: " - Encontrar grupos de míticas+ para jogar em EU.",
            pt: " - Buscador de grupos de míticas+ em Europa.",
            fr: " - Serveur de recherche de groupe mythique+ en Europe."
        },

        //RU MythicKeys
        " - Russian group finding and key pushing server.": {
            es: " - Rusos buscando grupos e llaves para pushear piedras.",
            pt: " - Russos buscando grupos e chaves míticas para subir níveis.",
            fr: " - Serveur de recherche de groupe mythique+ en Russie"
        },        

        //Keystones
        "Keystones": {
            es: "Piedras angulares míticas",
            pt: "Pedra-chave mítica",
            fr: "Clés mythiques"
        },

        keystones_timer: {
            en: "Complete a keystone run within the timer to upgrade a keystone to the next level.<span class=\"affixes-list__note\"></br>Example: Your group completes Halls of Atonement +6 in 37 minutes and 32 seconds. The par timer is 39 minutes, the keystone levels up from level 6 to level 7 and rolls a new random dungeon.",
            es: "Finaliza una mazmorra mítica en tiempo para mejorar la piedra angular.<span class=\"affixes-list__note\"></br>Ejemplo: Tu grupo completa Atal'Dazar +6 en 37 minutos y 32 segundos. El tiempo limite es 39 minutos, la piedra angular sube del nivel 6 al nivel 7 y sortea un nuevo calabozo de forma aleatoria.</span>",
            pt: "Complete uma corrida mítica para aumentar uma Pedra-chave mítica.<span class=\"affixes-list__note\"></br>Exemplo: Seu grupo completa o Atal'Dazar +6 em 37 minutos e 32 segundos. O tempo máximo é de 39 minutos, a pedra angular sobe do nível 6 para o nível 7 e uma nova masmorra aleatória é escolhida.",
            fr: "Terminez une clé mythique dans le temps imparti pour améliorer la clé au niveau supérieur.<span class=\"affixes-list__note\"></br>Par exemple : votre groupe termine les Salles de l'expiation +6 en 37 minutes et 32 secondes. Le temps imparti est de 39 minutes, la clé mythique passe du niveau 6 au niveau 7 et change de donjon pour un autre de manière aléatoire.</span>"
        },

        keystones_20per: {
            en: "Complete a keystone run with 20% of the timer remaining and upgrade the keystone 2 times in one go.</br><span class=\"affixes-list__note\">Example: Your group completes Spires of Ascension +5 in 30 minutes and 54 seconds. The par timer is 39 minutes, so the keystone levels up from level 5 to level 7 and rolls a new random dungeon.</span>",
            es: "Finaliza una piedra angular con 20% del tiempo restante y mejora la piedra 2 niveles de una vez.</br><span class=\"affixes-list__note\">Ejemplo: Tu grupo completa VETA MADRE +5 en 30 minutos y 54 segundos. El tiempo límite es 39 minutos, entonces la piedra subirá de nivel 5 a nivel 7 y sortea un nuevo calabozo de forma aleatoria.</span>",
            pt: "Conclúa com 20% do tempo restante e aumente 2 níveis de uma vez.</br><span class=\"affixes-list__note\">Exemplo: Seu grupo conclui MEGAMINA!!! +5 em 30 minutos e 54 segundos. O tempo máximo é de 39 minutos, então a pedra angular sobe do nível 5 para o nível 7 e uma nova masmorra aleatória é escolhida.</span>",
            fr: "Terminez une clé mythique avec 20% du temps imparti restant pour améliorer la clé de deux niveaux d'un coup.</br><span class=\"affixes-list__note\">Par exemple : votre groupe termine les Flèches de l'Ascension +5 en 30 minutes et 54 secondes. Le temps imparti est de 39 minutes, donc la clé mythique passe du niveau 5 au niveau 7 et change de donjon pour un autre de manière aléatoire.</span>"
        },

        keystones_40per: {
            en: "Complete a keysone run with 40% of the timer remaining and upgrade the keystone 3 times in one go.</br><span class=\"affixes-list__note\">Example: Your group completes Spires of Ascension +2 in 19 minutes and 34 seconds. The par timer is 39 minutes, so the keystone levels up from keystone level 2 to keystone level 5 and rolls a new dungeon.</span>",
            es: "Finaliza una piedra angular con 40% del tiempo restante y mejorea niveles de una vez.</br><span class=\"affixes-list__note\">Ejemplo: Tu grupo completa Altar de la Tormenta +2 en 19 minutos y 34 segundos. El tiempo límite es 39 minutos, entonces la piedra subirá de nivel 2 a nivel 5 y sale una nueva piedra de una mazmorra aleatoria.</span>",
            pt: "Conclúa com 40% do tempo restante e aumente 3 níveis de uma vez.</br><span class=\"affixes-list__note\">Exemplo: Seu grupo completa o Santuário da Tempestade +2 em 19 minutos e 34 segundos. O tempo máximo é de 39 minutos, então a pedra angular sobe do nível 2 para o nível 5 e uma nova masmorra aleatória é escolhida.</span>",
            fr: "Terminez une clé mythique avec 40% du temps imparti restant pour améliorer la clé de trois niveaux d'un coup.</br><span class=\"affixes-list__note\">Par exemple : votre groupe termine les Flèches de l'Ascension +2 en 19 minutes et 34 secondes. Le temps imparti est de 39 minutes, donc la clé mythique passe du niveau 2 au niveau 5 et change de donjon pour un autre de manière aléatoire.</span>"
        },

        keystones_didnt: {
            en: "Didn't beat the timer? That's ok. Your keystone doesn't deplete anymore, it just levels down by 1 and rerolls the dungeon.</br><span class=\"affixes-list__note\">Example: Your group completes Necrotic Wake +5 but misses the timer. Your keystone downgrades to Necrotic Wake +4.</span>",
            es: "¿No la has hecho en tiempo? No pasa nada. Tu piedra ya no se agota, simplemente baja un nivel y sortea un nuevo calabozo de forma aleatoria</br><span class=\"affixes-list__note\">Ejemplo: Tu grupo completa Mansión Crestavía en nivel 5, la piedra pasa a ser de nivel 4 y para Fuerte Libre.</span>",
            pt: "Não terminou a tempo? Sem problemas. Sua pedra não se esgotará, simplesmente baixa um nível e uma nova masmorra aleatória será escolhida.</br><span class=\"affixes-list__note\">Exemplo: Seu grupo conclui o nível 5 da pedra angular da Mansão Capeto fora do tempo limite. A chave passará a ser de nível 4 e Angra do Facão será a nova masmorra.</span>",
            fr: "Vous n'avez pas terminé le donjon dans les temps ? Ce n'est pas grave. Votre clé mythique ne casse plus, elle diminue simplement d'un niveua et change de donjon.</br><span class=\"affixes-list__note\">Par exemple : votre groupe termine Sillage nécrotique+5 mais rate le chronomètre. Votre clé mythique redescend à 4.</span>"
        },

        keystones_donth: {
            en: "Don't have a keystone? Completing a keystone run will net you a key at the end of the run. This keystone will be one level under the keystone run level you complete. You can also get a key from the final boss of any Shadowlands mythic dungeon.</br><span class=\"affixes-list__note trn\">Example: you complete a Plaguefall +7 - the chest at the end will have a random +6 key in it. Example 2: you completed a +0 Sanguine Depths - the chest at the end will have a +2 keystone for a random dungeon in it.</span>",
            es: "¿No tienes una piedra angular? Completar una piedra angular te otorga una piedra angular al finalizar. Esta piedra será un nivel menor al de la piedra completada. También puedes obtener una piedra angular en el jefe final de cualquier calabozo mítico de Batallo por Azeroth.</br><span class=\"affixes-list__note trn\">Ejemplo: Finalizas Fuerte Libre +7 - el cofre al final tendrá una piedra +6 dentro de el. Ejemplo 2: completaste VETA MADRE +0 - el cofre del final tendrá una piedra +2 para algún calabozo aleatorio.</span>",
            pt: "Não tem uma pedra angular? A conclusão de uma dungeon te dará uma pedra angular no final. Essa pedra angular estará um nível abaixo do nível de execução da pedra angular que você concluir. Você também pode obter uma chave do chefe final de qualquer masmorra mítica de Battle for Azeroth.</br><span class=\"affixes-list__note trn\">Exemplo: Você completa uma Angra do Facão +7 - o baú no final terá uma chave +6 aleatória. Exemplo 2: você completou um +0 O MEGAMINA!!! - o baú no final terá uma pedra angular +2 para uma masmorra aleatória.</span>",
            fr: "Vous n'avez pas de clé mythique ? Terminer un donjon en mythique+ ou en mythique 0 vous récompensera avec une clé mythique. Cette clé sera un niveau en dessous du niveau de clé que vous complétez (+2 dans le cas d'un mythique 0).</br><span class=\"affixes-list__note trn\">Par exemple : vous temrinez Malpeste +7 - le coffre à la fin du donjon contiendra une clé +6 aléatoire. Exemple 2 : vous terminez Profondeurs sanguines en mythique 0 - le coffre de fin de donjon contiendra une clé +2 pour un donjon aléatoire."
        },
                
        "Time penalty for deaths": {
            es: "Penalidades de tiempo por muerte",
            pt: "Pena de tempo para mortes",
            fr: "Pénalité de temps pour les morts"
        },

        "Five seconds are subtracted from the timer any time a player dies in a keystone run. While this may seem inconsequential at first, the time lost to death will add up quickly if players die to mechanics frequently. This can easily result in missing the timer." : {
            es: "Cinco segundos son restados del contador cada vez que un jugador muere. Aunque esto puede parecer intrascendente al principio, el tiempo perdido por muertes se sumará rápidamente si los jugadores mueren frecuentemente por mecánicas. Esto facilmente puede provocar no llegar a tiempo.",
            pt: "Cinco segundos são subtraídos do cronômetro sempre que um jogador morre em uma dungeon mítica+. Embora isso possa parecer pouco, o tempo perdido irá acumular rapidamente se os jogadores morrerem frequentemente para as mecânicas. Isso pode resultar facilmente na falta de tempo e abaixar o nível da sua chave.",
            fr: "Cinq secondes sont ajoutées au chronomètre à chaque fois qu'un joueur meurt dans une clé mythique+. Bien que ça puisse sembler insignifiant au début, le temps perdu va vite s'accumuler si les joueurs meurent souvent des mécaniques. Cela peut rapidement entraîner un échec de la clé."
        },

        "Instance Timer and Requirements for \"Level Jumps\"": {
            es: "Temporizador y requerimientos para \"subir de nivel\"",
            pt: "Temporizador e requisitos para \"subir de nível\"",
            fr: "Prérequis de temps pour \"sauter un niveau\""
        },

        "keystone level": {
            es: "nivel de la piedra angular",
            pt: "nível da pedra angular",
            fr: "niveau de clé mythique"
        },

        "keystone levels": {
            es: "niveles de la piedra angular",
            pt: "níveis da pedra",
            fr: "niveaux de clé mythique"
        },

        "left on the timer": {
            es: "tiempo restante",
            pt: "tempo restante",
            fr: "restant au chronomètre"

        },


        //Loot
        "Level": {
            es: "Nível",
            pt: "Nível",
            fr: "Niveau"
        },

        "Loot at the end": {
            es: "Nível del botín",
            pt: "Nível do saqueio",
            fr: "Niveau de butin"
        },

        "Weekly Chest": {
            es: "Cofre semanal",
            pt: "Baú semanal",
            fr: "Coffre hebdomadaire"
        },

        greatvault_loot_new: {
            en: "It will be most beneficial to complete a +15 every week to get the highest gear value from your weekly chest (was +14 prior to 9.1)",
            es: "Es más rentable finalizar una +15 semanalmente para obtener el botín con el nivel más alto en cada reinicio semanal.",
            pt: "É muito mais rentável finalizar uma masmorra +15 semanalmente para obter o saqueio com o item de nível mais alto a cada reinício semanal.",
            fr: "Le plus intéressant est de terminer une clé de niveau 15 ou plus chaque semaine pour avoir la meilleure récompense possible dans le coffre hebdomadaire."
        },

        //Patreon
        "Patreon heroes": {
            es: "Heroes de Patreon",
            pt: "Heróis do Patreon",
            fr: "Héros de Patreon"
        },

        "You guys keep it all afloat. Thanks for your continued support! Head over to <a href=\"https://www.patreon.com/mythicplus\">the Patreon page</a> if you feel like becoming a patron!": {
            es: "Vosotros nos mantienen a flote. ¡Muchísimas gracias por vuestro apoyo! Visita nuestro <a href=\"https://www.patreon.com/mythicplus\">Patreon</a> si quieres ser un mecena.",
            pt: "Vocês mantém a gente funcionando. Muito obrigado pelo seu apoio! Visite-nos em <a href=\"https://www.patreon.com/mythicplus\">Patreon</a> se quiser ser um apoiador desta causa.",
            fr: "C'est vous qui tenez la baraque. Merci pour votre soutien ! Rendez-vous sur <a href=\"https://www.patreon.com/mythicplus\">Patreon</a> si vous voulez devenir mécène !"
        },

        "Exalted Patrons": {
            es: "Mecena: Exaltado",
            pt: "Exaltado",
            fr: "Exaltés"
        },

        "Revered Patrons": {
            es: "Mecena: Venerado",
            pt: "Reverenciado",
            fr: "Révérés"
        },

        "Honored Patrons": {
            es: "Mecena: Honorado",
            pt: "Honrado",
            fr: "Honorés"
        },

        "Friendly Patrons": {
            es: "Mecena: Amistoso",
            pt: "Amigável",
            fr: "Amicaux"
        },

        //Footer
        "suggestions welcome. Reach me by:": {
            es: "sugerencias son bienvenidas. Búscame en:",
            pt: "sugestões são bem-vindas. Me encontre em:",
            fr: "suggestions bienvenues. Vous pouvez me contacter :"
        },

        "email: admin at mythicpl.us": {
            es: "correo eletrónico: admin at mythicpl.us",
            pt: "e-mail: admin at mythicpl.us",
            fr: "par email : admin at mythicpl.us"
        },

        "discord: domain#2722 OR the <a href=\"https://discord.gg/Z7GPUw8\">offical mythicpl.us discord ;)</a>": {
            es: "discord: domain#2722 O también el <a href=\"https://discord.gg/Z7GPUw8\">discord oficial de mythicpl.us ;)</a>",
            pt: "discord: domain#2722 OU também pelo <a href=\"https://discord.gg/Z7GPUw8\">discord oficial de mythicpl.us ;)</a>",
            fr: "via discord: domain#2722 OU le <a href=\"https://discord.gg/Z7GPUw8\">discord officiel mythicpl.us ;)</a>"
        },

        "open an issue at <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>": {
            es: "abrir un ticket en <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>",
            pt: "criar incidencia em <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>",
            fr: "en ouvrant une issue sur <a href=\"https://github.com/domainzero/mythicpl.us/issues\">GitHub</a>"
        },

        "Feeling generous?": {
            es: "¿Te sientes generoso?",
            pt: "Sentindo gratidão? Doe:",
            fr: "Vous vous sentez généreux ?"
        },

        "You can verify all my identities <a href=\"https://keybase.io/domain\">here.</a>": {
            es: "<a href=\"https://keybase.io/domain\">Aquí</a> están todas las formas en que puedes contactarme.",
            pt: "Você pode ver todos os meus contatos <a href=\"https://keybase.io/domain\">aqui.</a>",
            fr: "Vous pouvez vérifier toutes mes identités <a href=\"https://keybase.io/domain\">ici.</a>"
        },

        "World of Warcraft, Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.": {
            es: "World of Warcraft, Warcraft y Blizzard Entertainment son marcas comerciales o marcas comerciales registradas de Blizzard Entertainment, Inc. en los EE.UU. y/o en otros países.",
            pt: "World of Warcraft, Warcraft e Blizzard Entertainment são marcas comerciais ou marcas registradas da Blizzard Entertainment, Inc. nos EUA e/ou em outros países.",
            fr: "World of Warcraft, Warcraft et Blizzard Entertainment sont des marques déposées de Blizzard Entertainment, Inc. aux Etats-Unis et/ou d'autres pays."
        },
        //===== END HOME =====
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

        if (lang !== "en" && lang !== "es" && lang !== "pt" && lang !== "fr") {
            //Default
            lang = "en";
        }

        return lang;
    }

});
