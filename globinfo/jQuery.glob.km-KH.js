(function($) {
    var invariant = $.cultures.invariant,
        standard = invariant.calendars.standard,
        culture = $.cultures["km-KH"] = $.extend(true, {}, invariant, {
        name: "km-KH",
        englishName: "Khmer (Cambodia)",
        nativeName: "ខ្មែរ (កម្ពុជា)",
        numberFormat: {
            pattern: ["- n"],
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["-n$","n$"],
                symbol: "៛"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["ថ្ងៃអាទិត្យ","ថ្ងៃច័ន្ទ","ថ្ងៃអង្គារ","ថ្ងៃពុធ","ថ្ងៃព្រហស្បតិ៍","ថ្ងៃសុក្រ","ថ្ងៃសៅរ៍"],["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."]],
                months: [["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",""],["១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",""]],
                AM: "ព្រឹក",
                PM: "ល្ងាច",
                eras: [{"name":"មុនគ.ស.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    t: "H:mm tt",
                    f: "d MMMM yyyy H:mm tt",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "\u0027ថ្ងៃទី\u0027 dd \u0027ខែ\u0027 MM",
                    Y: "\u0027ខែ\u0027 MM \u0027ឆ្នាំ\u0027 yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: "ព្រឹក",
                PM: "ល្ងាច",
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm tt",
                    f: "dddd, MMMM dd, yyyy H:mm tt",
                    F: "dddd, MMMM dd, yyyy HH:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    });
    culture.calendar = culture.calendars.standard;
})(jQuery);