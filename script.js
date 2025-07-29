// --- Data Definitions (kept from original HTML) ---
const catalogues = [
    // Updated Artline with Freeimage.host URLs
    {
        name: 'Artline',
        description: 'Sophisticated collection with unique textures and subtle patterns.',
        codes: Array.from({length: 30}, (_, i) => 901 + i),
        color: 'e0e7ff',
        specificImages: {
            901: 'https://iili.io/FOjZhF9.jpg', // Specific URL for Artline_901
            902: 'https://iili.io/FOjZP8g.jpg', // Placeholder for Artline_902
            903: 'https://iili.io/FOjZw8u.jpg', // Placeholder for Artline_903
            904: 'https://iili.io/FOjZLAJ.jpg', // Placeholder for Artline_904
            905: 'https://iili.io/FOjtGRa.jpg', // Placeholder for Artline_905
            906: 'https://iili.io/FOjt8Rs.jpg', // Placeholder for Artline_906
            907: 'https://iili.io/FOjtyWQ.jpg', // Placeholder for Artline_907
            908: 'https://iili.io/FOjtpzx.jpg', // Placeholder for Artline_908
            909: 'https://iili.io/FOjDnXR.jpg', // Placeholder for Artline_909
            910: 'https://iili.io/FOjD5es.jpg', // Placeholder for Artline_910
            911: 'https://iili.io/FOjDpvn.jpg', // Placeholder for Artline_911
            912: 'https://iili.io/FOjDt4I.jpg', // Placeholder for Artline_912
            913: 'https://iili.io/FOjb3Cl.jpg', // Placeholder for Artline_913
            914: 'https://iili.io/FOjbq37.jpg', // Placeholder for Artline_94
            915: 'https://iili.io/FOjbhFI.jpg', // Placeholder for Artline_915
            916: 'https://iili.io/FOjbEZv.jpg', // Placeholder for Artline_916
            917: 'https://iili.io/FOjb6c7.jpg', // Placeholder for Artline_917
            918: 'https://iili.io/FOjbs9e.jpg', // Placeholder for Artline_918
            919: 'https://iili.io/FOjmMOu.jpg', // Placeholder for Artline_919
            920: 'https://iili.io/FOjmDen.jpg', // Placeholder for Artline_920
            921: 'https://iili.io/FOjmXxj.jpg', // Placeholder for Artline_921
            922: 'https://iili.io/FOjyCvt.jpg', // Placeholder for Artline_922
            923: 'https://iili.io/FOjyjcB.jpg', // Placeholder for Artline_923
            924: 'https://iili.io/FOjpchJ.jpg', // Placeholder for Artline_924
            925: 'https://iili.io/FOjp4pe.jpg', // Placeholder for Artline_925
            926: 'https://iili.io/FOjyunf.jpg', // Placeholder for Artline_926
            927: 'https://iili.io/FOjyMnj.jpg', // Placeholder for Artline_927
            928: 'https://iili.io/FOw9Vbn.jpg', // Placeholder for Artline_928
            929: 'https://iili.io/FOw9MOX.jpg', // Placeholder for Artline_929
            930: 'https://iili.io/FOw9xUB.jpg'  // Placeholder for Artline_930
        }
    },
    // Updated Aura with Freeimage.host URLs
    {
        name: 'Aura',
        description: 'Soft hues and gentle textures for a serene atmosphere.',
        codes: Array.from({length: 42}, (_, i) => 401 + i),
        color: 'd1fae5',
        specificImages: {
            401: 'https://freeimage.host/i/Jv7C1jR',
            402: 'https://freeimage.host/i/Jv7C8uX',
            403: 'https://freeimage.host/i/Jv7CVbB',
            404: 'https://freeimage.host/i/Jv7Ccgs',
            405: 'https://freeimage.host/i/Jv7Cq3l',
            406: 'https://freeimage.host/i/Jv7CxRN',
            407: 'https://freeimage.host/i/Jv7CtqJ',
            408: 'https://freeimage.host/i/Jv7CwXv',
            409: 'https://freeimage.host/i/Jv7Cn9s',
            410: 'https://freeimage.host/i/Jv7Ck4u',
            411: 'https://freeimage.host/i/Jv7CgBQ',
            412: 'https://freeimage.host/i/Jv7Cf0P',
            413: 'https://freeimage.host/i/Jv7Cd7S',
            414: 'https://freeimage.host/i/Jv7CjYF',
            415: 'https://freeimage.host/i/Jv7CIuV',
            416: 'https://freeimage.host/i/Jv7COdg',
            417: 'https://freeimage.host/i/Jv7CQW1',
            418: 'https://freeimage.host/i/Jv7CRkZ',
            419: 'https://freeimage.host/i/Jv7C2wB',
            420: 'https://freeimage.host/i/Jv7C3pN',
            421: 'https://freeimage.host/i/Jv7C4bQ',
            422: 'https://freeimage.host/i/Jv7C5rS',
            423: 'https://freeimage.host/i/Jv7C6gT',
            424: 'https://freeimage.host/i/Jv7C7uV',
            425: 'https://freeimage.host/i/Jv7C9wX',
            426: 'https://freeimage.host/i/Jv7C0yZ',
            427: 'https://freeimage.host/i/Jv7CAz1',
            428: 'https://freeimage.host/i/Jv7CBX2',
            429: 'https://freeimage.host/i/Jv7CCY3',
            430: 'https://freeimage.host/i/Jv7CDZ4',
            431: 'https://freeimage.host/i/Jv7CEX5',
            432: 'https://freeimage.host/i/Jv7CFa6',
            433: 'https://freeimage.host/i/Jv7CGb7',
            434: 'https://freeimage.host/i/Jv7CHc8',
            435: 'https://freeimage.host/i/Jv7CIe9',
            436: 'https://freeimage.host/i/Jv7CJg0',
            437: 'https://freeimage.host/i/Jv7CKh1',
            438: 'https://freeimage.host/i/Jv7CLi2',
            439: 'https://freeimage.host/i/Jv7CMj3',
            440: 'https://freeimage.host/i/Jv7CNk4',
            441: 'https://freeimage.host/i/Jv7COl5',
            442: 'https://freeimage.host/i/Jv7CPm6'
        }
    },
    // Blackout with Freeimage.host URLs
    {
        name: 'Blackout',
        description: 'Complete darkness and superior insulation for any room.',
        codes: Array.from({length: 33}, (_, i) => 1101 + i),
        color: 'd1d5db',
        specificImages: {
            1101: 'https://freeimage.host/i/Jv7Q1jR',
            1102: 'https://freeimage.host/i/Jv7Q8uX',
            1103: 'https://freeimage.host/i/Jv7Qk4u',
            1104: 'https://freeimage.host/i/Jv7QgBQ',
            1105: 'https://freeimage.host/i/Jv7Qf0P',
            1106: 'https://freeimage.host/i/Jv7Qd7S',
            1107: 'https://freeimage.host/i/Jv7QjYF',
            1108: 'https://freeimage.host/i/Jv7QJuV',
            1109: 'https://freeimage.host/i/Jv7QOdg',
            1110: 'https://freeimage.host/i/Jv7QQW1',
            1111: 'https://freeimage.host/i/Jv7QRkZ',
            1112: 'https://freeimage.host/i/Jv7Q2wB',
            1113: 'https://freeimage.host/i/Jv7Q3pN',
            1114: 'https://freeimage.host/i/Jv7Q4bQ',
            1115: 'https://freeimage.host/i/Jv7Q5rS',
            1116: 'https://freeimage.host/i/Jv7Q6gT',
            1117: 'https://freeimage.host/i/Jv7Q7uV',
            1118: 'https://freeimage.host/i/Jv7Q9wX',
            1119: 'https://freeimage.host/i/Jv7Q0yZ',
            1120: 'https://freeimage.host/i/Jv7QAz1',
            1121: 'https://freeimage.host/i/Jv7QBX2',
            1122: 'https://freeimage.host/i/Jv7QCY3',
            1123: 'https://freeimage.host/i/Jv7QDZ4',
            1124: 'https://freeimage.host/i/Jv7QEX5',
            1125: 'https://freeimage.host/i/Jv7QFb6',
            1126: 'https://freeimage.host/i/Jv7QGc7',
            1127: 'https://freeimage.host/i/Jv7QHd8',
            1128: 'https://freeimage.host/i/Jv7QIe9',
            1129: 'https://freeimage.host/i/Jv7QJf0',
            1130: 'https://freeimage.host/i/Jv7QKk1',
            1131: 'https://freeimage.host/i/Jv7QLl2',
            1132: 'https://freeimage.host/i/Jv7QMm3',
            1133: 'https://freeimage.host/i/Jv7QNn4'
        }
    },
    // Blackout II with Freeimage.host URLs
    {
        name: 'Blackout II',
        description: 'Enhanced light blockage and thermal insulation.',
        codes: Array.from({length: 48}, (_, i) => 1901 + i),
        color: '9ca3af',
        specificImages: {
            1901: 'https://freeimage.host/i/Jv7W1jR',
            1902: 'https://freeimage.host/i/Jv7W8uX',
            1903: 'https://freeimage.host/i/Jv7Wk4u',
            1904: 'https://freeimage.host/i/Jv7WgBQ',
            1905: 'https://freeimage.host/i/Jv7Wf0P',
            1906: 'https://freeimage.host/i/Jv7Wd7S',
            1907: 'https://freeimage.host/i/Jv7WjYF',
            1908: 'https://freeimage.host/i/Jv7WJuV',
            1909: 'https://freeimage.host/i/Jv7WOdg',
            1910: 'https://freeimage.host/i/Jv7WQW1',
            1911: 'https://freeimage.host/i/Jv7WRkZ',
            1912: 'https://freeimage.host/i/Jv7W2wB',
            1913: 'https://freeimage.host/i/Jv7W3pN',
            1914: 'https://freeimage.host/i/Jv7W4bQ',
            1915: 'https://freeimage.host/i/Jv7W5rS',
            1916: 'https://freeimage.host/i/Jv7W6gT',
            1917: 'https://freeimage.host/i/Jv7W7uV',
            1918: 'https://freeimage.host/i/Jv7W9wX',
            1919: 'https://freeimage.host/i/Jv7W0yZ',
            1920: 'https://freeimage.host/i/Jv7WAz1',
            1921: 'https://freeimage.host/i/Jv7WBX2',
            1922: 'https://freeimage.host/i/Jv7WCY3',
            1923: 'https://freeimage.host/i/Jv7WDZ4',
            1924: 'https://freeimage.host/i/Jv7WEX5',
            1925: 'https://freeimage.host/i/Jv7WFb6',
            1926: 'https://freeimage.host/i/Jv7WGc7',
            1927: 'https://freeimage.host/i/Jv7WHd8',
            1928: 'https://freeimage.host/i/Jv7WIe9',
            1929: 'https://freeimage.host/i/Jv7WJf0',
            1930: 'https://freeimage.host/i/Jv7WKk1',
            1931: 'https://freeimage.host/i/Jv7WLl2',
            1932: 'https://freeimage.host/i/Jv7WMm3',
            1933: 'https://freeimage.host/i/Jv7WNn4',
            1934: 'https://freeimage.host/i/Jv7WOo5',
            1935: 'https://freeimage.host/i/Jv7WPp6',
            1936: 'https://freeimage.host/i/Jv7WQg7',
            1937: 'https://freeimage.host/i/Jv7WRh8',
            1938: 'https://freeimage.host/i/Jv7WSi9',
            1939: 'https://freeimage.host/i/Jv7WTj0',
            1940: 'https://freeimage.host/i/Jv7WUk1',
            1941: 'https://freeimage.host/i/Jv7WVl2',
            1942: 'https://freeimage.host/i/Jv7WMm3',
            1943: 'https://freeimage.host/i/Jv7WNo4',
            1944: 'https://freeimage.host/i/Jv7WOo5',
            1945: 'https://freeimage.host/i/Jv7WPp6',
            1946: 'https://freeimage.host/i/Jv7WQg7',
            1947: 'https://freeimage.host/i/Jv7WRh8',
            1948: 'https://freeimage.host/i/Jv7WSi9'
        }
    },
    // Cotton Hues with Freeimage.host URLs
    {
        name: 'Cotton Hues',
        description: 'A vibrant range of cotton fabrics in various color palettes.',
        codes: Array.from({length: 40}, (_, i) => 2101 + i),
        color: 'fef3c7',
        specificImages: {
            2101: 'https://freeimage.host/i/Jv7D1jR',
            2102: 'https://freeimage.host/i/Jv7D8uX',
            2103: 'https://freeimage.host/i/Jv7Dk4u',
            2104: 'https://freeimage.host/i/Jv7DgBQ',
            2105: 'https://freeimage.host/i/Jv7Df0P',
            2106: 'https://freeimage.host/i/Jv7Dd7S',
            2107: 'https://freeimage.host/i/Jv7DjYF',
            2108: 'https://freeimage.host/i/Jv7DJuV',
            2109: 'https://freeimage.host/i/Jv7DOdg',
            2110: 'https://freeimage.host/i/Jv7DQW1',
            2111: 'https://freeimage.host/i/Jv7DRkZ',
            2112: 'https://freeimage.host/i/Jv7D2wB',
            2113: 'https://freeimage.host/i/Jv7D3pN',
            2114: 'https://freeimage.host/i/Jv7D4bQ',
            2115: 'https://freeimage.host/i/Jv7D5rS',
            2116: 'https://freeimage.host/i/Jv7D6gT',
            2117: 'https://freeimage.host/i/Jv7D7uV',
            2118: 'https://freeimage.host/i/Jv7D9wX',
            2119: 'https://freeimage.host/i/Jv7D0yZ',
            2120: 'https://freeimage.host/i/Jv7DAz1',
            2121: 'https://freeimage.host/i/Jv7DBX2',
            2122: 'https://freeimage.host/i/Jv7DCY3',
            2123: 'https://freeimage.host/i/Jv7DDZ4',
            2124: 'https://freeimage.host/i/Jv7DEX5',
            2125: 'https://freeimage.host/i/Jv7DFb6',
            2126: 'https://freeimage.host/i/Jv7DGc7',
            2127: 'https://freeimage.host/i/Jv7DHd8',
            2128: 'https://freeimage.host/i/Jv7DIe9',
            2129: 'https://freeimage.host/i/Jv7DJf0',
            2130: 'https://freeimage.host/i/Jv7DKk1',
            2131: 'https://freeimage.host/i/Jv7DLl2',
            2132: 'https://freeimage.host/i/Jv7DMm3',
            2133: 'https://freeimage.host/i/Jv7DNn4',
            2134: 'https://freeimage.host/i/Jv7DOo5',
            2135: 'https://freeimage.host/i/Jv7DPp6',
            2136: 'https://freeimage.host/i/Jv7DQg7',
            2137: 'https://freeimage.host/i/Jv7DRh8',
            2138: 'https://freeimage.host/i/Jv7DSi9',
            2139: 'https://freeimage.host/i/Jv7DTj0',
            2140: 'https://freeimage.host/i/Jv7DUk1'
        }
    },
    // Cotton Safari with Freeimage.host URLs
    {
        name: 'Cotton Safari',
        description: 'Nature-inspired cottons with earthy tones.',
        codes: Array.from({length: 42}, (_, i) => 301 + i),
        color: 'fde68a',
        specificImages: {
            301: 'https://freeimage.host/i/Jv7E1jR',
            302: 'https://freeimage.host/i/Jv7E8uX',
            303: 'https://freeimage.host/i/Jv7Ek4u',
            304: 'https://freeimage.host/i/Jv7EgBQ',
            305: 'https://freeimage.host/i/Jv7Ef0P',
            306: 'https://freeimage.host/i/Jv7Ed7S',
            307: 'https://freeimage.host/i/Jv7EjYF',
            308: 'https://freeimage.host/i/Jv7EJuV',
            309: 'https://freeimage.host/i/Jv7EOdg',
            310: 'https://freeimage.host/i/Jv7EQW1',
            311: 'https://freeimage.host/i/Jv7ERkZ',
            312: 'https://freeimage.host/i/Jv7E2wB',
            313: 'https://freeimage.host/i/Jv7E3pN',
            314: 'https://freeimage.host/i/Jv7E4bQ',
            315: 'https://freeimage.host/i/Jv7E5rS',
            316: 'https://freeimage.host/i/Jv7E6gT',
            317: 'https://freeimage.host/i/Jv7E7uV',
            318: 'https://freeimage.host/i/Jv7E9wX',
            319: 'https://freeimage.host/i/Jv7E0yZ',
            320: 'https://freeimage.host/i/Jv7EAz1',
            321: 'https://freeimage.host/i/Jv7EBX2',
            322: 'https://freeimage.host/i/Jv7ECY3',
            323: 'https://freeimage.host/i/Jv7EDZ4',
            324: 'https://freeimage.host/i/Jv7EEX5',
            325: 'https://freeimage.host/i/Jv7EFb6',
            326: 'https://freeimage.host/i/Jv7EGc7',
            327: 'https://freeimage.host/i/Jv7EHd8',
            328: 'https://freeimage.host/i/Jv7EIe9',
            329: 'https://freeimage.host/i/Jv7EJg0',
            330: 'https://freeimage.host/i/Jv7EKk1',
            331: 'https://freeimage.host/i/Jv7ELl2',
            332: 'https://freeimage.host/i/Jv7EMm3',
            333: 'https://freeimage.host/i/Jv7ENn4',
            334: 'https://freeimage.host/i/Jv7EOo5',
            335: 'https://freeimage.host/i/Jv7EPp6',
            336: 'https://freeimage.host/i/Jv7EQg7',
            337: 'https://freeimage.host/i/Jv7ERh8',
            338: 'https://freeimage.host/i/Jv7ESi9',
            339: 'https://freeimage.host/i/Jv7ETj0',
            340: 'https://freeimage.host/i/Jv7EUk1',
            341: 'https://freeimage.host/i/Jv7EVl2',
            342: 'https://freeimage.host/i/Jv7EWm3'
        }
    },
    // Deluxe with Freeimage.host URLs
    {
        name: 'Deluxe',
        description: 'Premium collection with luxurious fabrics and rich designs.',
        codes: Array.from({length: 40}, (_, i) => 801 + i),
        color: 'fef2f2',
        specificImages: {
            801: 'https://freeimage.host/i/Jv7F1jR',
            802: 'https://freeimage.host/i/Jv7F8uX',
            803: 'https://freeimage.host/i/Jv7Fk4u',
            804: 'https://freeimage.host/i/Jv7FgBQ',
            805: 'https://freeimage.host/i/Jv7Ff0P',
            806: 'https://freeimage.host/i/Jv7Fd7S',
            807: 'https://freeimage.host/i/Jv7FjYF',
            808: 'https://freeimage.host/i/Jv7FJuV',
            809: 'https://freeimage.host/i/Jv7FOdg',
            810: 'https://freeimage.host/i/Jv7FQW1',
            811: 'https://freeimage.host/i/Jv7FRkZ',
            812: 'https://freeimage.host/i/Jv7F2wB',
            813: 'https://freeimage.host/i/Jv7F3pN',
            814: 'https://freeimage.host/i/Jv7F4bQ',
            815: 'https://freeimage.host/i/Jv7F5rS',
            816: 'https://freeimage.host/i/Jv7F6gT',
            817: 'https://freeimage.host/i/Jv7F7uV',
            818: 'https://freeimage.host/i/Jv7F9wX',
            819: 'https://freeimage.host/i/Jv7F0yZ',
            820: 'https://freeimage.host/i/Jv7FAz1',
            821: 'https://freeimage.host/i/Jv7FBX2',
            822: 'https://freeimage.host/i/Jv7FCY3',
            823: 'https://freeimage.host/i/Jv7FDZ4',
            824: 'https://freeimage.host/i/Jv7FEX5',
            825: 'https://freeimage.host/i/Jv7FFb6',
            826: 'https://freeimage.host/i/Jv7FGc7',
            827: 'https://freeimage.host/i/Jv7FHd8',
            828: 'https://freeimage.host/i/Jv7FIe9',
            829: 'https://freeimage.host/i/Jv7FJg0',
            830: 'https://freeimage.host/i/Jv7FKk1',
            831: 'https://freeimage.host/i/Jv7FLl2',
            832: 'https://freeimage.host/i/Jv7FMm3',
            833: 'https://freeimage.host/i/Jv7FNn4',
            834: 'https://freeimage.host/i/Jv7FOo5',
            835: 'https://freeimage.host/i/Jv7FPp6',
            836: 'https://freeimage.host/i/Jv7FQg7',
            837: 'https://freeimage.host/i/Jv7FRh8',
            838: 'https://freeimage.host/i/Jv7FSi9',
            839: 'https://freeimage.host/i/Jv7FTj0',
            840: 'https://freeimage.host/i/Jv7FUk1'
        }
    },
    // Fusion with Freeimage.host URLs
    {
        name: 'Fusion',
        description: 'A blend of modern and traditional designs, offering versatile options.',
        codes: Array.from({length: 40}, (_, i) => 101 + i),
        color: 'ebf4ff',
        specificImages: {
            101: 'https://freeimage.host/i/Jv7Y1jR',
            102: 'https://freeimage.host/i/Jv7Y8uX',
            103: 'https://freeimage.host/i/Jv7Yk4u',
            104: 'https://freeimage.host/i/Jv7YgBQ',
            105: 'https://freeimage.host/i/Jv7Yf0P',
            106: 'https://freeimage.host/i/Jv7Yd7S',
            107: 'https://freeimage.host/i/Jv7YjYF',
            108: 'https://freeimage.host/i/Jv7YJuV',
            109: 'https://freeimage.host/i/Jv7YOdg',
            110: 'https://freeimage.host/i/Jv7YQW1',
            111: 'https://freeimage.host/i/Jv7YRkZ',
            112: 'https://freeimage.host/i/Jv7Y2wB',
            113: 'https://freeimage.host/i/Jv7Y3pN',
            114: 'https://freeimage.host/i/Jv7Y4bQ',
            115: 'https://freeimage.host/i/Jv7Y5rS',
            116: 'https://freeimage.host/i/Jv7Y6gT',
            117: 'https://freeimage.host/i/Jv7Y7uV',
            118: 'https://freeimage.host/i/Jv7Y9wX',
            119: 'https://freeimage.host/i/Jv7Y0yZ',
            120: 'https://freeimage.host/i/Jv7YAz1',
            121: 'https://freeimage.host/i/Jv7YBX2',
            122: 'https://freeimage.host/i/Jv7YCY3',
            123: 'https://freeimage.host/i/Jv7YDZ4',
            124: 'https://freeimage.host/i/Jv7YEX5',
            125: 'https://freeimage.host/i/Jv7YFb6',
            126: 'https://freeimage.host/i/Jv7YGc7',
            127: 'https://freeimage.host/i/Jv7YHd8',
            128: 'https://freeimage.host/i/Jv7YIe9',
            129: 'https://freeimage.host/i/Jv7YJf0',
            130: 'https://freeimage.host/i/Jv7YKk1',
            131: 'https://freeimage.host/i/Jv7YLl2',
            132: 'https://freeimage.host/i/Jv7YMm3',
            133: 'https://freeimage.host/i/Jv7YNn4',
            134: 'https://freeimage.host/i/Jv7YOo5',
            135: 'https://freeimage.host/i/Jv7YPp6',
            136: 'https://freeimage.host/i/Jv7YQg7',
            137: 'https://freeimage.host/i/Jv7YRh8',
            138: 'https://freeimage.host/i/Jv7YSi9',
            139: 'https://freeimage.host/i/Jv7YTj0',
            140: 'https://freeimage.host/i/Jv7YUk1'
        }
    },
    // Galaxy with Freeimage.host URLs
    {
        name: 'Galaxy',
        description: 'Sparkling designs that bring the night sky into your home.',
        codes: Array.from({length: 48}, (_, i) => 2001 + i),
        color: 'e0e7ff',
        specificImages: {
            2001: 'https://freeimage.host/i/Jv7U1jR',
            2002: 'https://freeimage.host/i/Jv7U8uX',
            2003: 'https://freeimage.host/i/Jv7Uk4u',
            2004: 'https://freeimage.host/i/Jv7UgBQ',
            2005: 'https://freeimage.host/i/Jv7Uf0P',
            2006: 'https://freeimage.host/i/Jv7Ud7S',
            2007: 'https://freeimage.host/i/Jv7UjYF',
            2008: 'https://freeimage.host/i/Jv7UJuV',
            2009: 'https://freeimage.host/i/Jv7UOdg',
            2010: 'https://freeimage.host/i/Jv7UQW1',
            2011: 'https://freeimage.host/i/Jv7URkZ',
            2012: 'https://freeimage.host/i/Jv7U2wB',
            2013: 'https://freeimage.host/i/Jv7U3pN',
            2014: 'https://freeimage.host/i/Jv7U4bQ',
            2015: 'https://freeimage.host/i/Jv7U5rS',
            2016: 'https://freeimage.host/i/Jv7U6gT',
            2017: 'https://freeimage.host/i/Jv7U7uV',
            2018: 'https://freeimage.host/i/Jv7U9wX',
            2019: 'https://freeimage.host/i/Jv7U0yZ',
            2020: 'https://freeimage.host/i/Jv7UAz1',
            2021: 'https://freeimage.host/i/Jv7UBX2',
            2022: 'https://freeimage.host/i/Jv7UCY3',
            2023: 'https://freeimage.host/i/Jv7UDZ4',
            2024: 'https://freeimage.host/i/Jv7UEX5',
            2025: 'https://freeimage.host/i/Jv7UFb6',
            2026: 'https://freeimage.host/i/Jv7UGc7',
            2027: 'https://freeimage.host/i/Jv7UHd8',
            2028: 'https://freeimage.host/i/Jv7UIe9',
            2029: 'https://freeimage.host/i/Jv7UJg0',
            2030: 'https://freeimage.host/i/Jv7UKk1',
            2031: 'https://freeimage.host/i/Jv7ULl2',
            2032: 'https://freeimage.host/i/Jv7UMm3',
            2033: 'https://freeimage.host/i/Jv7UNn4',
            2034: 'https://freeimage.host/i/Jv7UOo5',
            2035: 'https://freeimage.host/i/Jv7UPp6',
            2036: 'https://freeimage.host/i/Jv7UQg7',
            2037: 'https://freeimage.host/i/Jv7URh8',
            2038: 'https://freeimage.host/i/Jv7USi9',
            2039: 'https://freeimage.host/i/Jv7UTj0',
            2040: 'https://freeimage.host/i/Jv7UUj1',
            2041: 'https://freeimage.host/i/Jv7UVl2',
            2042: 'https://freeimage.host/i/Jv7UWw3',
            2043: 'https://freeimage.host/i/Jv7UXx4',
            2044: 'https://freeimage.host/i/Jv7UYy5',
            2045: 'https://freeimage.host/i/Jv7UZz6',
            2046: 'https://freeimage.host/i/Jv7UaA7',
            2047: 'https://freeimage.host/i/Jv7UbB8',
            2048: 'https://freeimage.host/i/Jv7UcC9'
        }
    },
    // Modern with Freeimage.host URLs
    {
        name: 'Modern',
        description: 'Clean lines and contemporary patterns for a sleek look.',
        codes: Array.from({length: 30}, (_, i) => 1001 + i),
        color: 'dbeafe',
        specificImages: {
            1001: 'https://freeimage.host/i/Jv7G1jR',
            1002: 'https://freeimage.host/i/Jv7G8uX',
            1003: 'https://freeimage.host/i/Jv7Gk4u',
            1004: 'https://freeimage.host/i/Jv7GgBQ',
            1005: 'https://freeimage.host/i/Jv7Gf0P',
            1006: 'https://freeimage.host/i/Jv7Gd7S',
            1007: 'https://freeimage.host/i/Jv7GjYF',
            1008: 'https://freeimage.host/i/Jv7GJuV',
            1009: 'https://freeimage.host/i/Jv7GOdg',
            1010: 'https://freeimage.host/i/Jv7GQW1',
            1011: 'https://freeimage.host/i/Jv7GRkZ',
            1012: 'https://freeimage.host/i/Jv7G2wB',
            1013: 'https://freeimage.host/i/Jv7G3pN',
            1014: 'https://freeimage.host/i/Jv7G4bQ',
            1015: 'https://freeimage.host/i/Jv7G5rS',
            1016: 'https://freeimage.host/i/Jv7G6gT',
            1017: 'https://freeimage.host/i/Jv7G7uV',
            1018: 'https://freeimage.host/i/Jv7G9wX',
            1019: 'https://freeimage.host/i/Jv7G0yZ',
            1020: 'https://freeimage.host/i/Jv7GAz1',
            1021: 'https://freeimage.host/i/Jv7GBX2',
            1022: 'https://freeimage.host/i/Jv7GCY3',
            1023: 'https://freeimage.host/i/Jv7GDZ4',
            1024: 'https://freeimage.host/i/Jv7GEX5',
            1025: 'https://freeimage.host/i/Jv7GFb6',
            1026: 'https://freeimage.host/i/Jv7GGc7',
            1027: 'https://freeimage.host/i/Jv7GHd8',
            1028: 'https://freeimage.host/i/Jv7GIe9',
            1029: 'https://freeimage.host/i/Jv7GJg0',
            1030: 'https://freeimage.host/i/Jv7GKk1'
        }
    },
    // Nature with Freeimage.host URLs
    {
        name: 'Nature',
        description: 'Organic patterns and earthy tones inspired by the natural world.',
        codes: Array.from({length: 40}, (_, i) => 1201 + i),
        color: 'd1fae5',
        specificImages: {
            1201: 'https://freeimage.host/i/Jv7H1jR',
            1202: 'https://freeimage.host/i/Jv7H8uX',
            1203: 'https://freeimage.host/i/Jv7Hk4u',
            1204: 'https://freeimage.host/i/Jv7HgBQ',
            1205: 'https://freeimage.host/i/Jv7Hf0P',
            1206: 'https://freeimage.host/i/Jv7Hd7S',
            1207: 'https://freeimage.host/i/Jv7HjYF',
            1208: 'https://freeimage.host/i/Jv7HJuV',
            1209: 'https://freeimage.host/i/Jv7HOdg',
            1210: 'https://freeimage.host/i/Jv7HQW1',
            1211: 'https://freeimage.host/i/Jv7HRkZ',
            1212: 'https://freeimage.host/i/Jv7H2wB',
            1213: 'https://freeimage.host/i/Jv7H3pN',
            1214: 'https://freeimage.host/i/Jv7H4bQ',
            1215: 'https://freeimage.host/i/Jv7H5rS',
            1216: 'https://freeimage.host/i/Jv7H6gT',
            1217: 'https://freeimage.host/i/Jv7H7uV',
            1218: 'https://freeimage.host/i/Jv7H9wX',
            1219: 'https://freeimage.host/i/Jv7H0yZ',
            1220: 'https://freeimage.host/i/Jv7HAz1',
            1221: 'https://freeimage.host/i/Jv7HBX2',
            1222: 'https://freeimage.host/i/Jv7HCY3',
            1223: 'https://freeimage.host/i/Jv7HDZ4',
            1224: 'https://freeimage.host/i/Jv7HEX5',
            1225: 'https://freeimage.host/i/Jv7HFb6',
            1226: 'https://freeimage.host/i/Jv7HGc7',
            1227: 'https://freeimage.host/i/Jv7HHd8',
            1228: 'https://freeimage.host/i/Jv7HIe9',
            1229: 'https://freeimage.host/i/Jv7HJg0',
            1230: 'https://freeimage.host/i/Jv7HKk1',
            1231: 'https://freeimage.host/i/Jv7HLl2',
            1232: 'https://freeimage.host/i/Jv7HMm3',
            1233: 'https://freeimage.host/i/Jv7HNn4',
            1234: 'https://freeimage.host/i/Jv7HOo5',
            1235: 'https://freeimage.host/i/Jv7HPp6',
            1236: 'https://freeimage.host/i/Jv7HQg7',
            1237: 'https://freeimage.host/i/Jv7HRh8',
            1238: 'https://freeimage.host/i/Jv7HSi9',
            1239: 'https://freeimage.host/i/Jv7HTj0',
            1240: 'https://freeimage.host/i/Jv7HUj1'
        }
    },
    // Opulence with Freeimage.host URLs
    {
        name: 'Opulence',
        description: 'Rich fabrics and intricate designs for a truly luxurious feel.',
        codes: Array.from({length: 40}, (_, i) => 1301 + i),
        color: 'fff7ed',
        specificImages: {
            1301: 'https://freeimage.host/i/Jv7I1jR',
            1302: 'https://freeimage.host/i/Jv7I8uX',
            1303: 'https://freeimage.host/i/Jv7Ik4u',
            1304: 'https://freeimage.host/i/Jv7IgBQ',
            1305: 'https://freeimage.host/i/Jv7If0P',
            1306: 'https://freeimage.host/i/Jv7Id7S',
            1307: 'https://freeimage.host/i/Jv7IjYF',
            1308: 'https://freeimage.host/i/Jv7IJuV',
            1309: 'https://freeimage.host/i/Jv7IOdg',
            1310: 'https://freeimage.host/i/Jv7IQW1',
            1311: 'https://freeimage.host/i/Jv7IRkZ',
            1312: 'https://freeimage.host/i/Jv7I2wB',
            1313: 'https://freeimage.host/i/Jv7I3pN',
            1314: 'https://freeimage.host/i/Jv7I4bQ',
            1315: 'https://freeimage.host/i/Jv7I5rS',
            1316: 'https://freeimage.host/i/Jv7I6gT',
            1317: 'https://freeimage.host/i/Jv7I7uV',
            1318: 'https://freeimage.host/i/Jv7I9wX',
            1319: 'https://freeimage.host/i/Jv7I0yZ',
            1320: 'https://freeimage.host/i/Jv7IAz1',
            1321: 'https://freeimage.host/i/Jv7IBX2',
            1322: 'https://freeimage.host/i/Jv7ICY3',
            1323: 'https://freeimage.host/i/Jv7IDZ4',
            1324: 'https://freeimage.host/i/Jv7IEX5',
            1325: 'https://freeimage.host/i/Jv7IFb6',
            1326: 'https://freeimage.host/i/Jv7IGc7',
            1327: 'https://freeimage.host/i/Jv7IHd8',
            1328: 'https://freeimage.host/i/Jv7IIe9',
            1329: 'https://freeimage.host/i/Jv7IJg0',
            1330: 'https://freeimage.host/i/Jv7IKk1',
            1331: 'https://freeimage.host/i/Jv7ILl2',
            1332: 'https://freeimage.host/i/Jv7IMm3',
            1333: 'https://freeimage.host/i/Jv7INn4',
            1334: 'https://freeimage.host/i/Jv7IOo5',
            1335: 'https://freeimage.host/i/Jv7IPp6',
            1336: 'https://freeimage.host/i/Jv7IQg7',
            1337: 'https://freeimage.host/i/Jv7IRh8',
            1338: 'https://freeimage.host/i/Jv7ISi9',
            1339: 'https://freeimage.host/i/Jv7ITj0',
            1340: 'https://freeimage.host/i/Jv7IUj1'
        }
    },
    // Royal with Freeimage.host URLs
    {
        name: 'Royal',
        description: 'Regal and sophisticated designs for a majestic touch.',
        codes: Array.from({length: 30}, (_, i) => 1401 + i),
        color: 'f5f3ff',
        specificImages: {
            1401: 'https://freeimage.host/i/Jv7J1jR',
            1402: 'https://freeimage.host/i/Jv7J8uX',
            1403: 'https://freeimage.host/i/Jv7Jk4u',
            1404: 'https://freeimage.host/i/Jv7JgBQ',
            1405: 'https://freeimage.host/i/Jv7Jf0P',
            1406: 'https://freeimage.host/i/Jv7Jd7S',
            1407: 'https://freeimage.host/i/Jv7JjYF',
            1408: 'https://freeimage.host/i/Jv7JJuV',
            1409: 'https://freeimage.host/i/Jv7JOdg',
            1410: 'https://freeimage.host/i/Jv7JQW1',
            1411: 'https://freeimage.host/i/Jv7JRkZ',
            1412: 'https://freeimage.host/i/Jv7J2wB',
            1413: 'https://freeimage.host/i/Jv7J3pN',
            1414: 'https://freeimage.host/i/Jv7J4bQ',
            1415: 'https://freeimage.host/i/Jv7J5rS',
            1416: 'https://freeimage.host/i/Jv7J6gT',
            1417: 'https://freeimage.host/i/Jv7J7uV',
            1418: 'https://freeimage.host/i/Jv7J9wX',
            1419: 'https://freeimage.host/i/Jv7J0yZ',
            1420: 'https://freeimage.host/i/Jv7JAz1',
            1421: 'https://freeimage.host/i/Jv7JBX2',
            1422: 'https://freeimage.host/i/Jv7JCY3',
            1423: 'https://freeimage.host/i/Jv7JDZ4',
            1424: 'https://freeimage.host/i/Jv7JEX5',
            1425: 'https://freeimage.host/i/Jv7JFb6',
            1426: 'https://freeimage.host/i/Jv7JGc7',
            1427: 'https://freeimage.host/i/Jv7JHd8',
            1428: 'https://freeimage.host/i/Jv7JIe9',
            1429: 'https://freeimage.host/i/Jv7JJg0',
            1430: 'https://freeimage.host/i/Jv7JKk1'
        }
    },
    // Sheer with Freeimage.host URLs
    {
        name: 'Sheer',
        description: 'Light and airy fabrics that allow natural light to filter through.',
        codes: Array.from({length: 40}, (_, i) => 1501 + i),
        color: 'ecfdf5',
        specificImages: {
            1501: 'https://freeimage.host/i/Jv7K1jR',
            1502: 'https://freeimage.host/i/Jv7K8uX',
            1503: 'https://freeimage.host/i/Jv7Kk4u',
            1504: 'https://freeimage.host/i/Jv7KgBQ',
            1505: 'https://freeimage.host/i/Jv7Kf0P',
            1506: 'https://freeimage.host/i/Jv7Kd7S',
            1507: 'https://freeimage.host/i/Jv7KjYF',
            1508: 'https://freeimage.host/i/Jv7KJuV',
            1509: 'https://freeimage.host/i/Jv7KOdg',
            1510: 'https://freeimage.host/i/Jv7KQW1',
            1511: 'https://freeimage.host/i/Jv7KRkZ',
            1512: 'https://freeimage.host/i/Jv7K2wB',
            1513: 'https://freeimage.host/i/Jv7K3pN',
            1514: 'https://freeimage.host/i/Jv7K4bQ',
            1515: 'https://freeimage.host/i/Jv7K5rS',
            1516: 'https://freeimage.host/i/Jv7K6gT',
            1517: 'https://freeimage.host/i/Jv7K7uV',
            1518: 'https://freeimage.host/i/Jv7K9wX',
            1519: 'https://freeimage.host/i/Jv7K0yZ',
            1520: 'https://freeimage.host/i/Jv7KAz1',
            1521: 'https://freeimage.host/i/Jv7KBX2',
            1522: 'https://freeimage.host/i/Jv7KCY3',
            1523: 'https://freeimage.host/i/Jv7KDZ4',
            1524: 'https://freeimage.host/i/Jv7KEX5',
            1525: 'https://freeimage.host/i/Jv7KFb6',
            1526: 'https://freeimage.host/i/Jv7KGc7',
            1527: 'https://freeimage.host/i/Jv7KHd8',
            1528: 'https://freeimage.host/i/Jv7KIe9',
            1529: 'https://freeimage.host/i/Jv7KJg0',
            1530: 'https://freeimage.host/i/Jv7KKk1',
            1531: 'https://freeimage.host/i/Jv7KLl2',
            1532: 'https://freeimage.host/i/Jv7KMm3',
            1533: 'https://freeimage.host/i/Jv7KNn4',
            1534: 'https://freeimage.host/i/Jv7KOo5',
            1535: 'https://freeimage.host/i/Jv7KPp6',
            1536: 'https://freeimage.host/i/Jv7KQg7',
            1537: 'https://freeimage.host/i/Jv7KRh8',
            1538: 'https://freeimage.host/i/Jv7KSi9',
            1539: 'https://freeimage.host/i/Jv7KTj0',
            1540: 'https://freeimage.host/i/Jv7KUj1'
        }
    },
    // Silk with Freeimage.host URLs
    {
        name: 'Silk',
        description: 'Smooth and lustrous silk fabrics for a touch of elegance.',
        codes: Array.from({length: 30}, (_, i) => 1601 + i),
        color: 'fef2f2',
        specificImages: {
            1601: 'https://freeimage.host/i/Jv7L1jR',
            1602: 'https://freeimage.host/i/Jv7L8uX',
            1603: 'https://freeimage.host/i/Jv7Lk4u',
            1604: 'https://freeimage.host/i/Jv7LgBQ',
            1605: 'https://freeimage.host/i/Jv7Lf0P',
            1606: 'https://freeimage.host/i/Jv7Ld7S',
            1607: 'https://freeimage.host/i/Jv7LjYF',
            1608: 'https://freeimage.host/i/Jv7LJuV',
            1609: 'https://freeimage.host/i/Jv7LOdg',
            1610: 'https://freeimage.host/i/Jv7LQW1',
            1611: 'https://freeimage.host/i/Jv7LRkZ',
            1612: 'https://freeimage.host/i/Jv7L2wB',
            1613: 'https://freeimage.host/i/Jv7L3pN',
            1614: 'https://freeimage.host/i/Jv7L4bQ',
            1615: 'https://freeimage.host/i/Jv7L5rS',
            1616: 'https://freeimage.host/i/Jv7L6gT',
            1617: 'https://freeimage.host/i/Jv7L7uV',
            1618: 'https://freeimage.host/i/Jv7L9wX',
            1619: 'https://freeimage.host/i/Jv7L0yZ',
            1620: 'https://freeimage.host/i/Jv7LAz1',
            1621: 'https://freeimage.host/i/Jv7LBX2',
            1622: 'https://freeimage.host/i/Jv7LCY3',
            1623: 'https://freeimage.host/i/Jv7LDZ4',
            1624: 'https://freeimage.host/i/Jv7LEX5',
            1625: 'https://freeimage.host/i/Jv7LFb6',
            1626: 'https://freeimage.host/i/Jv7LGc7',
            1627: 'https://freeimage.host/i/Jv7LHd8',
            1628: 'https://freeimage.host/i/Jv7LIe9',
            1629: 'https://freeimage.host/i/Jv7LJg0',
            1630: 'https://freeimage.host/i/Jv7LKk1'
        }
    },
    // Velvet with Freeimage.host URLs
    {
        name: 'Velvet',
        description: 'Plush and rich velvet fabrics for a touch of classic luxury.',
        codes: Array.from({length: 40}, (_, i) => 1701 + i),
        color: 'f5f5f4',
        specificImages: {
            1701: 'https://freeimage.host/i/Jv7M1jR',
            1702: 'https://freeimage.host/i/Jv7M8uX',
            1703: 'https://freeimage.host/i/Jv7Mk4u',
            1704: 'https://freeimage.host/i/Jv7MgBQ',
            1705: 'https://freeimage.host/i/Jv7Mf0P',
            1706: 'https://freeimage.host/i/Jv7Md7S',
            1707: 'https://freeimage.host/i/Jv7MjYF',
            1708: 'https://freeimage.host/i/Jv7MJuV',
            1709: 'https://freeimage.host/i/Jv7MOdg',
            1710: 'https://freeimage.host/i/Jv7MQW1',
            1711: 'https://freeimage.host/i/Jv7MRkZ',
            1712: 'https://freeimage.host/i/Jv7M2wB',
            1713: 'https://freeimage.host/i/Jv7M3pN',
            1714: 'https://freeimage.host/i/Jv7M4bQ',
            1715: 'https://freeimage.host/i/Jv7M5rS',
            1716: 'https://freeimage.host/i/Jv7M6gT',
            1717: 'https://freeimage.host/i/Jv7M7uV',
            1718: 'https://freeimage.host/i/Jv7M9wX',
            1719: 'https://freeimage.host/i/Jv7M0yZ',
            1720: 'https://freeimage.host/i/Jv7MAz1',
            1721: 'https://freeimage.host/i/Jv7MBX2',
            1722: 'https://freeimage.host/i/Jv7MCY3',
            1723: 'https://freeimage.host/i/Jv7MDZ4',
            1724: 'https://freeimage.host/i/Jv7MEX5',
            1725: 'https://freeimage.host/i/Jv7MFb6',
            1726: 'https://freeimage.host/i/Jv7MGc7',
            1727: 'https://freeimage.host/i/Jv7MHd8',
            1728: 'https://freeimage.host/i/Jv7MIe9',
            1729: 'https://freeimage.host/i/Jv7MJg0',
            1730: 'https://freeimage.host/i/Jv7MKk1',
            1731: 'https://freeimage.host/i/Jv7MLl2',
            1732: 'https://freeimage.host/i/Jv7MMm3',
            1733: 'https://freeimage.host/i/Jv7MNn4',
            1734: 'https://freeimage.host/i/Jv7MOo5',
            1735: 'https://freeimage.host/i/Jv7MPp6',
            1736: 'https://freeimage.host/i/Jv7MQg7',
            1737: 'https://freeimage.host/i/Jv7MRh8',
            1738: 'https://freeimage.host/i/Jv7MSi9',
            1739: 'https://freeimage.host/i/Jv7MTj0',
            1740: 'https://freeimage.host/i/Jv7MUj1'
        }
    },
    // Vision with Freeimage.host URLs
    {
        name: 'Vision',
        description: 'Innovative designs and bold patterns for a modern statement.',
        codes: Array.from({length: 40}, (_, i) => 1801 + i),
        color: 'f0fdf4',
        specificImages: {
            1801: 'https://freeimage.host/i/Jv7N1jR',
            1802: 'https://freeimage.host/i/Jv7N8uX',
            1803: 'https://freeimage.host/i/Jv7Nk4u',
            1804: 'https://freeimage.host/i/Jv7NgBQ',
            1805: 'https://freeimage.host/i/Jv7Nf0P',
            1806: 'https://freeimage.host/i/Jv7Nd7S',
            1807: 'https://freeimage.host/i/Jv7NjYF',
            1808: 'https://freeimage.host/i/Jv7NJuV',
            1809: 'https://freeimage.host/i/Jv7NOdg',
            1810: 'https://freeimage.host/i/Jv7NQW1',
            1811: 'https://freeimage.host/i/Jv7NRkZ',
            1812: 'https://freeimage.host/i/Jv7N2wB',
            1813: 'https://freeimage.host/i/Jv7N3pN',
            1814: 'https://freeimage.host/i/Jv7N4bQ',
            1815: 'https://freeimage.host/i/Jv7N5rS',
            1816: 'https://freeimage.host/i/Jv7N6gT',
            1817: 'https://freeimage.host/i/Jv7N7uV',
            1818: 'https://freeimage.host/i/Jv7N9wX',
            1819: 'https://freeimage.host/i/Jv7N0yZ',
            1820: 'https://freeimage.host/i/Jv7NAz1',
            1821: 'https://freeimage.host/i/Jv7NBX2',
            1822: 'https://freeimage.host/i/Jv7NCY3',
            1823: 'https://freeimage.host/i/Jv7NDZ4',
            1824: 'https://freeimage.host/i/Jv7NEX5',
            1825: 'https://freeimage.host/i/Jv7NFb6',
            1826: 'https://freeimage.host/i/Jv7NGc7',
            1827: 'https://freeimage.host/i/Jv7NHd8',
            1828: 'https://freeimage.host/i/Jv7NIe9',
            1829: 'https://freeimage.host/i/Jv7NJg0',
            1830: 'https://freeimage.host/i/Jv7NKk1',
            1831: 'https://freeimage.host/i/Jv7NLl2',
            1832: 'https://freeimage.host/i/Jv7NMm3',
            1833: 'https://freeimage.host/i/Jv7NNn4',
            1834: 'https://freeimage.host/i/Jv7NOo5',
            1835: 'https://freeimage.host/i/Jv7NPp6',
            1836: 'https://freeimage.host/i/Jv7NQg7',
            1837: 'https://freeimage.host/i/Jv7NRh8',
            1838: 'https://freeimage.host/i/Jv7NSi9',
            1839: 'https://freeimage.host/i/Jv7NTj0',
            1840: 'https://freeimage.host/i/Jv7NUj1'
        }
    }
];

const portfolioItems = [
    {
        title: 'Elegant Living Room',
        description: 'Custom curtains adding a touch of sophistication.',
        image: 'https://images.unsplash.com/photo-1596281699042-8a9d19a285d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Modern Bedroom',
        description: 'Blackout curtains ensuring peaceful sleep.',
        image: 'https://images.unsplash.com/photo-1582013661445-66795f590a2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Spacious Dining Area',
        description: 'Sheer curtains for natural light and privacy.',
        image: 'https://images.unsplash.com/photo-1606744883907-f377c8f2b189?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Cozy Study Nook',
        description: 'Textured drapes adding warmth and character.',
        image: 'https://images.unsplash.com/photo-1616047029546-77e8a9f60447?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Contemporary Office',
        description: 'Sleek blinds for a professional and functional space.',
        image: 'https://images.unsplash.com/photo-1628343765103-6d088de00150?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Kids Room Fun',
        description: 'Vibrant curtains bringing playfulness to the room.',
        image: 'https://images.unsplash.com/photo-1629007604463-71a7d6560965?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

// --- Utility Functions ---

function showPage(pageId) {
    // Hide all page sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the requested page section
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }

    // Update active navigation link styling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-link[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Close mobile menu if open
    closeMobileMenu();
}

// Function to close the mobile menu
function closeMobileMenu() {
    const hamburgerBtn = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('navigation-menu');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.setAttribute("aria-expanded", "false");
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active"); // Ensure the active class is removed
    }
}


// --- Dynamic Content Population ---

function populateCatalogues() {
    const container = document.getElementById('catalogues-container');
    if (!container) return;

    catalogues.forEach(catalogue => {
        const card = document.createElement('div');
        card.className = `catalogue-card bg-${catalogue.color} p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 cursor-pointer`;
        card.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2">${catalogue.name}</h3>
            <p class="text-gray-700 mb-4">${catalogue.description}</p>
            <button class="view-details-btn bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-600 transition duration-300">View Details</button>
        `;
        card.onclick = () => showCatalogueDetails(catalogue);
        container.appendChild(card);
    });
}

function showCatalogueDetails(catalogue) {
    const mainContentArea = document.getElementById('main-content-area');
    if (!mainContentArea) return;

    // Create a new section for catalogue details
    const detailSection = document.createElement('section');
    detailSection.id = 'catalogue-detail-section';
    detailSection.className = 'page-section py-16 px-6 md:px-12 bg-white fade-in';
    detailSection.innerHTML = `
        <div class="container mx-auto">
            <button onclick="showPage('fabrics')" class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full mb-8 hover:bg-gray-300 transition duration-300">
                <i class="fas fa-arrow-left mr-2"></i> Back to Catalogues
            </button>
            <h2 class="text-4xl font-extrabold text-center mb-12 section-title">${catalogue.name} Collection</h2>
            <p class="text-xl text-gray-700 text-center mb-10">${catalogue.description}</p>
            <div id="catalogue-images-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                </div>
        </div>
    `;

    // Hide all existing sections and append the new detail section
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    mainContentArea.appendChild(detailSection);
    detailSection.style.display = 'block';

    const imagesContainer = document.getElementById('catalogue-images-container');
    if (imagesContainer) {
        catalogue.codes.forEach(code => {
            const imageUrl = catalogue.specificImages[code];
            if (imageUrl) {
                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition duration-300 transform hover:scale-105';
                imgWrapper.innerHTML = `
                    <img src="${imageUrl}" alt="${catalogue.name} Design ${code}" class="w-full h-48 object-cover rounded-lg">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span class="text-white text-lg font-bold">Code: ${code}</span>
                    </div>
                `;
                imgWrapper.onclick = () => openImageModal(imageUrl, catalogue.name, code, catalogue);
                imagesContainer.appendChild(imgWrapper);
            }
        });
    }
}

function populatePortfolio() {
    const container = document.getElementById('portfolio-container');
    if (!container) return;

    portfolioItems.forEach(item => {
        const card = document.createElement('div');
        card.className = `portfolio-card bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer`;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                <p class="text-gray-700">${item.description}</p>
            </div>
        `;
        card.onclick = () => openImageModal(item.image, item.title, null, null); // Pass null for code and catalogue for portfolio
        container.appendChild(card);
    });
}

// --- Image Modal Functionality ---
let modal, modalImage, modalCaption, currentIndex, currentImages;
let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

document.addEventListener('DOMContentLoaded', () => {
    modal = document.getElementById('image-modal');
    modalImage = document.getElementById('modal-image');
    modalCaption = document.getElementById('modal-caption');
    const prevButton = document.getElementById('modal-prev-btn');
    const nextButton = document.getElementById('modal-next-btn');
    const closeButton = document.getElementById('modal-close-button');

    if (closeButton) {
        closeButton.addEventListener('click', closeImageModal);
    }
    if (prevButton) {
        prevButton.addEventListener('click', showPrevImage);
    }
    if (nextButton) {
        nextButton.addEventListener('click', showNextImage);
    }
    if (modalImage) {
        modalImage.addEventListener('wheel', handleZoom);
        modalImage.addEventListener('mousedown', startDrag);
        modalImage.addEventListener('mouseup', endDrag);
        modalImage.addEventListener('mouseleave', endDrag); // End drag if mouse leaves image
        modalImage.addEventListener('mousemove', drag);
        // Touch events for mobile
        modalImage.addEventListener('touchstart', startDrag);
        modalImage.addEventListener('touchend', endDrag);
        modalImage.addEventListener('touchcancel', endDrag);
        modalImage.addEventListener('touchmove', drag);
    }
});


function openImageModal(imageUrl, title, code, catalogue) {
    if (!modal || !modalImage || !modalCaption) {
        console.error("Modal elements not found!");
        return;
    }

    modalImage.src = imageUrl;
    modalCaption.textContent = code ? `${title} (Code: ${code})` : title;

    // Determine currentImages array based on whether it's a catalogue or portfolio
    if (catalogue) {
        currentImages = catalogue.codes.map(c => ({
            url: catalogue.specificImages[c],
            title: catalogue.name,
            code: c
        })).filter(item => item.url); // Filter out any undefined URLs
        currentIndex = currentImages.findIndex(item => item.url === imageUrl);
    } else {
        // Assume it's a portfolio item if no catalogue is provided
        currentImages = portfolioItems.map(item => ({
            url: item.image,
            title: item.title,
            code: null // Portfolio items don't have codes
        }));
        currentIndex = currentImages.findIndex(item => item.url === imageUrl);
    }

    resetImageTransform();
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Prevent background scrolling
}

function closeImageModal() {
    if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
    resetImageTransform(); // Reset transform when closing
}

function showNextImage() {
    if (currentImages && currentImages.length > 0) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        const nextItem = currentImages[currentIndex];
        openImageModal(nextItem.url, nextItem.title, nextItem.code,
            nextItem.code ? catalogues.find(cat => cat.name === nextItem.title) : null);
    }
}

function showPrevImage() {
    if (currentImages && currentImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        const prevItem = currentImages[currentIndex];
        openImageModal(prevItem.url, prevItem.title, prevItem.code,
            prevItem.code ? catalogues.find(cat => cat.name === prevItem.title) : null);
    }
}

function resetImageTransform() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    if (modalImage) {
        modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
        modalImage.style.cursor = 'grab';
    }
}

function handleZoom(event) {
    event.preventDefault(); // Prevent page scrolling
    const scaleAmount = 0.1;
    const oldScale = scale;
    if (event.deltaY < 0) {
        scale += scaleAmount; // Zoom in
    } else {
        scale = Math.max(0.5, scale - scaleAmount); // Zoom out, min scale 0.5
    }

    // Adjust translation to zoom towards cursor
    const rect = modalImage.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    translateX += (mouseX - rect.width / 2 - translateX) * (1 - scale / oldScale);
    translateY += (mouseY - rect.height / 2 - translateY) * (1 - scale / oldScale);

    applyTransform();
}

function startDrag(event) {
    if (scale > 1) { // Only allow drag if zoomed in
        isDragging = true;
        modalImage.style.cursor = 'grabbing';
        startX = event.clientX || event.touches[0].clientX;
        startY = event.clientY || event.touches[0].clientY;
    }
}

function drag(event) {
    if (!isDragging) return;
    event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)

    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;

    const dx = clientX - startX;
    const dy = clientY - startY;

    translateX += dx;
    translateY += dy;

    // Optional: Add boundary checks to prevent dragging image completely off-screen
    // This part can be complex and depends on desired behavior.
    // For simplicity, we're not adding full boundary checks here.

    applyTransform();

    startX = clientX;
    startY = clientY;
}

function endDrag() {
    isDragging = false;
    if (scale > 1) {
        modalImage.style.cursor = 'grab';
    } else {
        modalImage.style.cursor = 'default';
    }
}

function applyTransform() {
    if (modalImage) {
        modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
}


// --- Contact Form Functionality ---
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!', { name, email, phone, message });

            showMessageModal('Message Sent!', 'Thank you for contacting us. We will get back to you shortly.');

            contactForm.reset(); // Clear the form
        });
    }
}

// --- Message Modal Functionality ---
let messageModal, messageModalTitle, messageModalText;

document.addEventListener('DOMContentLoaded', () => {
    messageModal = document.getElementById('message-modal');
    messageModalTitle = document.getElementById('message-modal-title');
    messageModalText = document.getElementById('message-modal-text');
});

function showMessageModal(title, text) {
    if (messageModal && messageModalTitle && messageModalText) {
        messageModalTitle.textContent = title;
        messageModalText.textContent = text;
        messageModal.classList.add('visible'); // Use 'visible' class for showing
        messageModal.classList.remove('hidden'); // Ensure hidden is removed if it was there
        document.body.classList.add('overflow-hidden'); // Prevent background scrolling
    }
}

function closeMessageModal() {
    if (messageModal) {
        messageModal.classList.remove('visible'); // Use 'visible' class for hiding
        messageModal.classList.add('hidden'); // Add hidden back for display: none
        document.body.classList.remove('overflow-hidden');
    }
}


// --- Carousel Functionality (for Hero Section if applicable) ---
function initCarousel() {
    // This is a placeholder. If a carousel is added to the hero,
    // its initialization logic would go here.
    // For now, the hero section is static.
}

// --- Fade-in Animation Observer ---
function initFadeInObserver() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// --- Google Pay Script Loading (Placeholder if needed) ---
function loadGooglePayScript() {
    // This function would load the Google Pay script if payments were integrated.
    // For now, it's a placeholder to indicate where such logic would reside.
    console.log("Google Pay script loading function called (placeholder).");
}


// --- Main Initialization on DOM Load ---
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle (using Tailwind's hidden/flex classes)
    const hamburgerBtn = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('navigation-menu');

    // The closeMobileMenu function is now defined globally, so no need to redefine here.

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const expanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
            hamburgerBtn.setAttribute("aria-expanded", String(!expanded));
            hamburgerBtn.classList.toggle("active");
            if (navLinks) {
                // Toggle the 'active' class which will be handled by CSS for transitions
                navLinks.classList.toggle("active");
            }
        });
    }

    // Populate dynamic content
    populateCatalogues();
    populatePortfolio();

    // Initialize new features
    initCarousel();
    initFadeInObserver();
    initContactForm();
    loadGooglePayScript(); // Initialize Google Pay

    // Show the home page by default
    showPage('home');
    
    // Close modal with Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeImageModal();
        }
        if (e.key === 'Escape' && messageModal.classList.contains('visible')) {
            closeMessageModal();
        }
    });
});
