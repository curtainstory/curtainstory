// --- Data Definitions ---
const catalogues = [
    // Updated Artline with Freeimage.host URLs
    {
        name: 'Artline',
        description: 'Sophisticated collection with unique textures and subtle patterns.',
        codes: Array.from({length: 30}, (_, i) => 901 + i),
        color: 'e0e7ff',
        specificImages: {
            901: 'https://iili.io/FOjZhF9.jpg', 902: 'https://iili.io/FOjZP8g.jpg', 903: 'https://iili.io/FOjZw8u.jpg', 904: 'https://iili.io/FOjZLAJ.jpg', 905: 'https://iili.io/FOjtGRa.jpg', 906: 'https://iili.io/FOjt8Rs.jpg', 907: 'https://iili.io/FOjtyWQ.jpg', 908: 'https://iili.io/FOjtpzx.jpg', 909: 'https://iili.io/FOjDnXR.jpg', 910: 'https://iili.io/FOjD5es.jpg', 911: 'https://iili.io/FOjDpvn.jpg', 912: 'https://iili.io/FOjDt4I.jpg', 913: 'https://iili.io/FOjb3Cl.jpg', 914: 'https://iili.io/FOjbq37.jpg', 915: 'https://iili.io/FOjbhFI.jpg', 916: 'https://iili.io/FOjbEZv.jpg', 917: 'https://iili.io/FOjb6c7.jpg', 918: 'https://iili.io/FOjbs9e.jpg', 919: 'https://iili.io/FOjmMOu.jpg', 920: 'https://iili.io/FOjmDen.jpg', 921: 'https://iili.io/FOjmXxj.jpg', 922: 'https://iili.io/FOjyCvt.jpg', 923: 'https://iili.io/FOjyjcB.jpg', 924: 'https://iili.io/FOjpchJ.jpg', 925: 'https://iili.io/FOjp4pe.jpg', 926: 'https://iili.io/FOjyunf.jpg', 927: 'https://iili.io/FOjyMnj.jpg', 928: 'https://iili.io/FOw9Vbn.jpg', 929: 'https://iili.io/FOw9MOX.jpg', 930: 'https://iili.io/FOw9xUB.jpg'
        }
    },
    // Updated Aura with Freeimage.host URLs
    {
        name: 'Aura',
        description: 'Soft hues and gentle textures for a serene atmosphere.',
        codes: Array.from({length: 42}, (_, i) => 401 + i),
        color: 'd1fae5',
        specificImages: {
            401: 'https://freeimage.host/i/Jv7C1jR', 402: 'https://freeimage.host/i/Jv7C8uX', 403: 'https://freeimage.host/i/Jv7CVbB', 404: 'https://freeimage.host/i/Jv7Ccgs', 405: 'https://freeimage.host/i/Jv7Cq3l', 406: 'https://freeimage.host/i/Jv7CxRN', 407: 'https://freeimage.host/i/Jv7CtqJ', 408: 'https://freeimage.host/i/Jv7CwXv', 409: 'https://freeimage.host/i/Jv7Cn9s', 410: 'https://freeimage.host/i/Jv7Ck4u', 411: 'https://freeimage.host/i/Jv7CgBQ', 412: 'https://freeimage.host/i/Jv7Cf0P', 413: 'https://freeimage.host/i/Jv7Cd7S', 414: 'https://freeimage.host/i/Jv7CjYF', 415: 'https://freeimage.host/i/Jv7CIuV', 416: 'https://freeimage.host/i/Jv7COdg', 417: 'https://freeimage.host/i/Jv7CQW1', 418: 'https://freeimage.host/i/Jv7CRkZ', 419: 'https://freeimage.host/i/Jv7C2wB', 420: 'https://freeimage.host/i/Jv7C3pN', 421: 'https://freeimage.host/i/Jv7C4bQ', 422: 'https://freeimage.host/i/Jv7C5rS', 423: 'https://freeimage.host/i/Jv7C6gT', 424: 'https://freeimage.host/i/Jv7C7uV', 425: 'https://freeimage.host/i/Jv7C9wX', 426: 'https://freeimage.host/i/Jv7C0yZ', 427: 'https://freeimage.host/i/Jv7CAz1', 428: 'https://freeimage.host/i/Jv7CBX2', 429: 'https://freeimage.host/i/Jv7CCY3', 430: 'https://freeimage.host/i/Jv7CDZ4', 431: 'https://freeimage.host/i/Jv7CEX5', 432: 'https://freeimage.host/i/Jv7CFa6', 433: 'https://freeimage.host/i/Jv7CGb7', 434: 'https://freeimage.host/i/Jv7CHc8', 435: 'https://freeimage.host/i/Jv7CIe9', 436: 'https://freeimage.host/i/Jv7CJg0', 437: 'https://freeimage.host/i/Jv7CKh1', 438: 'https://freeimage.host/i/Jv7CLi2', 439: 'https://freeimage.host/i/Jv7CMj3', 440: 'https://freeimage.host/i/Jv7CNk4', 441: 'https://freeimage.host/i/Jv7COl5', 442: 'https://freeimage.host/i/Jv7CPm6'
        }
    },
    // Blackout with Freeimage.host URLs
    {
        name: 'Blackout',
        description: 'Complete darkness and superior insulation for any room.',
        codes: Array.from({length: 33}, (_, i) => 1101 + i),
        color: 'd1d5db',
        specificImages: {
            1101: 'https://freeimage.host/i/Jv7Q1jR', 1102: 'https://freeimage.host/i/Jv7Q8uX', 1103: 'https://freeimage.host/i/Jv7Qk4u', 1104: 'https://freeimage.host/i/Jv7QgBQ', 1105: 'https://freeimage.host/i/Jv7Qf0P', 1106: 'https://freeimage.host/i/Jv7Qd7S', 1107: 'https://freeimage.host/i/Jv7QjYF', 1108: 'https://freeimage.host/i/Jv7QJuV', 1109: 'https://freeimage.host/i/Jv7QOdg', 1110: 'https://freeimage.host/i/Jv7QQW1', 1111: 'https://freeimage.host/i/Jv7QRkZ', 1112: 'https://freeimage.host/i/Jv7Q2wB', 1113: 'https://freeimage.host/i/Jv7Q3pN', 1114: 'https://freeimage.host/i/Jv7Q4bQ', 1115: 'https://freeimage.host/i/Jv7Q5rS', 1116: 'https://freeimage.host/i/Jv7Q6gT', 1117: 'https://freeimage.host/i/Jv7Q7uV', 1118: 'https://freeimage.host/i/Jv7Q9wX', 1119: 'https://freeimage.host/i/Jv7Q0yZ', 1120: 'https://freeimage.host/i/Jv7QAz1', 1121: 'https://freeimage.host/i/Jv7QBX2', 1122: 'https://freeimage.host/i/Jv7QCY3', 1123: 'https://freeimage.host/i/Jv7QDZ4', 1124: 'https://freeimage.host/i/Jv7QEX5', 1125: 'https://freeimage.host/i/Jv7QFb6', 1126: 'https://freeimage.host/i/Jv7QGc7', 1127: 'https://freeimage.host/i/Jv7QHd8', 1128: 'https://freeimage.host/i/Jv7QIe9', 1129: 'https://freeimage.host/i/Jv7QJf0', 1130: 'https://freeimage.host/i/Jv7QKk1', 1131: 'https://freeimage.host/i/Jv7QLl2', 1132: 'https://freeimage.host/i/Jv7QMm3', 1133: 'https://freeimage.host/i/Jv7QNn4'
        }
    },
    // Blackout II with Freeimage.host URLs
    {
        name: 'Blackout II',
        description: 'Enhanced light blockage and thermal insulation.',
        codes: Array.from({length: 48}, (_, i) => 1901 + i),
        color: '9ca3af',
        specificImages: {
            1901: 'https://freeimage.host/i/Jv7W1jR', 1902: 'https://freeimage.host/i/Jv7W8uX', 1903: 'https://freeimage.host/i/Jv7Wk4u', 1904: 'https://freeimage.host/i/Jv7WgBQ', 1905: 'https://freeimage.host/i/Jv7Wf0P', 1906: 'https://freeimage.host/i/Jv7Wd7S', 1907: 'https://freeimage.host/i/Jv7WjYF', 1908: 'https://freeimage.host/i/Jv7WJuV', 1909: 'https://freeimage.host/i/Jv7WOdg', 1910: 'https://freeimage.host/i/Jv7WQW1', 1911: 'https://freeimage.host/i/Jv7WRkZ', 1912: 'https://freeimage.host/i/Jv7W2wB', 1913: 'https://freeimage.host/i/Jv7W3pN', 1914: 'https://freeimage.host/i/Jv7W4bQ', 1915: 'https://freeimage.host/i/Jv7W5rS', 1916: 'https://freeimage.host/i/Jv7W6gT', 1917: 'https://freeimage.host/i/Jv7W7uV', 1918: 'https://freeimage.host/i/Jv7W9wX', 1919: 'https://freeimage.host/i/Jv7W0yZ', 1920: 'https://freeimage.host/i/Jv7WAz1', 1921: 'https://freeimage.host/i/Jv7WBX2', 1922: 'https://freeimage.host/i/Jv7WCY3', 1923: 'https://freeimage.host/i/Jv7WDZ4', 1924: 'https://freeimage.host/i/Jv7WEX5', 1925: 'https://freeimage.host/i/Jv7WFb6', 1926: 'https://freeimage.host/i/Jv7WGc7', 1927: 'https://freeimage.host/i/Jv7WHd8', 1928: 'https://freeimage.host/i/Jv7WIe9', 1929: 'https://freeimage.host/i/Jv7WJf0', 1930: 'https://freeimage.host/i/Jv7WKk1', 1931: 'https://freeimage.host/i/Jv7WLl2', 1932: 'https://freeimage.host/i/Jv7WMm3', 1933: 'https://freeimage.host/i/Jv7WNn4', 1934: 'https://freeimage.host/i/Jv7WOo5', 1935: 'https://freeimage.host/i/Jv7WPp6', 1936: 'https://freeimage.host/i/Jv7WQg7', 1937: 'https://freeimage.host/i/Jv7WRh8', 1938: 'https://freeimage.host/i/Jv7WSi9', 1939: 'https://freeimage.host/i/Jv7WTj0', 1940: 'https://freeimage.host/i/Jv7WUk1', 1941: 'https://freeimage.host/i/Jv7WVl2', 1942: 'https://freeimage.host/i/Jv7WMm3', 1943: 'https://freeimage.host/i/Jv7WNo4', 1944: 'https://freeimage.host/i/Jv7WOo5', 1945: 'https://freeimage.host/i/Jv7WPp6', 1946: 'https://freeimage.host/i/Jv7WQg7', 1947: 'https://freeimage.host/i/Jv7WRh8', 1948: 'https://freeimage.host/i/Jv7WSi9'
        }
    },
    // Cotton Hues with Freeimage.host URLs
    {
        name: 'Cotton Hues',
        description: 'A vibrant range of cotton fabrics in various color palettes.',
        codes: Array.from({length: 40}, (_, i) => 2101 + i),
        color: 'fef3c7',
        specificImages: {
            2101: 'https://freeimage.host/i/Jv7D1jR', 2102: 'https://freeimage.host/i/Jv7D8uX', 2103: 'https://freeimage.host/i/Jv7Dk4u', 2104: 'https://freeimage.host/i/Jv7DgBQ', 2105: 'https://freeimage.host/i/Jv7Df0P', 2106: 'https://freeimage.host/i/Jv7Dd7S', 2107: 'https://freeimage.host/i/Jv7DjYF', 2108: 'https://freeimage.host/i/Jv7DJuV', 2109: 'https://freeimage.host/i/Jv7DOdg', 2110: 'https://freeimage.host/i/Jv7DQW1', 2111: 'https://freeimage.host/i/Jv7DRkZ', 2112: 'https://freeimage.host/i/Jv7D2wB', 2113: 'https://freeimage.host/i/Jv7D3pN', 2114: 'https://freeimage.host/i/Jv7D4bQ', 2115: 'https://freeimage.host/i/Jv7D5rS', 2116: 'https://freeimage.host/i/Jv7D6gT', 2117: 'https://freeimage.host/i/Jv7D7uV', 2118: 'https://freeimage.host/i/Jv7D9wX', 2119: 'https://freeimage.host/i/Jv7D0yZ', 2120: 'https://freeimage.host/i/Jv7DAz1', 2121: 'https://freeimage.host/i/Jv7DBX2', 22: 'https://freeimage.host/i/Jv7DCY3', 2123: 'https://freeimage.host/i/Jv7DDZ4', 2124: 'https://freeimage.host/i/Jv7DEX5', 2125: 'https://freeimage.host/i/Jv7DFb6', 2126: 'https://freeimage.host/i/Jv7DGc7', 2127: 'https://freeimage.host/i/Jv7DHd8', 2128: 'https://freeimage.host/i/Jv7DIe9', 2129: 'https://freeimage.host/i/Jv7DJf0', 2130: 'https://freeimage.host/i/Jv7DKk1', 2131: 'https://freeimage.host/i/Jv7DLl2', 2132: 'https://freeimage.host/i/Jv7DMm3', 2133: 'https://freeimage.host/i/Jv7DNn4', 2134: 'https://freeimage.host/i/Jv7DOo5', 2135: 'https://freeimage.host/i/Jv7DPp6', 2136: 'https://freeimage.host/i/Jv7DQg7', 2137: 'https://freeimage.host/i/Jv7DRh8', 2138: 'https://freeimage.host/i/Jv7DSi9', 2139: 'https://freeimage.host/i/Jv7DTj0', 2140: 'https://freeimage.host/i/Jv7DUk1'
        }
    },
    // Cotton Safari with Freeimage.host URLs
    {
        name: 'Cotton Safari',
        description: 'Nature-inspired cottons with earthy tones.',
        codes: Array.from({length: 42}, (_, i) => 301 + i),
        color: 'fde68a',
        specificImages: {
            301: 'https://freeimage.host/i/Jv7E1jR', 302: 'https://freeimage.host/i/Jv7E8uX', 303: 'https://freeimage.host/i/Jv7Ek4u', 304: 'https://freeimage.host/i/Jv7EgBQ', 305: 'https://freeimage.host/i/Jv7Ef0P', 306: 'https://freeimage.host/i/Jv7Ed7S', 307: 'https://freeimage.host/i/Jv7EjYF', 308: 'https://freeimage.host/i/Jv7EJuV', 309: 'https://freeimage.host/i/Jv7EOdg', 310: 'https://freeimage.host/i/Jv7EQW1', 311: 'https://freeimage.host/i/Jv7ERkZ', 312: 'https://freeimage.host/i/Jv7E2wB', 313: 'https://freeimage.host/i/Jv7E3pN', 314: 'https://freeimage.host/i/Jv7E4bQ', 315: 'https://freeimage.host/i/Jv7E5rS', 316: 'https://freeimage.host/i/Jv7E6gT', 317: 'https://freeimage.host/i/Jv7E7uV', 318: 'https://freeimage.host/i/Jv7E9wX', 319: 'https://freeimage.host/i/Jv7E0yZ', 320: 'https://freeimage.host/i/Jv7EAz1', 321: 'https://freeimage.host/i/Jv7EBX2', 322: 'https://freeimage.host/i/Jv7ECY3', 323: 'https://freeimage.host/i/Jv7EDZ4', 324: 'https://freeimage.host/i/Jv7EEX5', 325: 'https://freeimage.host/i/Jv7EFb6', 326: 'https://freeimage.host/i/Jv7EGc7', 327: 'https://freeimage.host/i/Jv7EHd8', 328: 'https://freeimage.host/i/Jv7EIe9', 329: 'https://freeimage.host/i/Jv7EJf0', 330: 'https://freeimage.host/i/Jv7EKk1', 331: 'https://freeimage.host/i/Jv7ELl2', 332: 'https://freeimage.host/i/Jv7EMm3', 333: 'https://freeimage.host/i/Jv7ENn4', 334: 'https://freeimage.host/i/Jv7EOo5', 335: 'https://freeimage.host/i/Jv7EPp6', 336: 'https://freeimage.host/i/Jv7EQg7', 337: 'https://freeimage.host/i/Jv7ERh8', 338: 'https://freeimage.host/i/Jv7ESi9', 339: 'https://freeimage.host/i/Jv7ETj0', 340: 'https://freeimage.host/i/Jv7EUk1', 341: 'https://freeimage.host/i/Jv7EVl2', 342: 'https://freeimage.host/i/Jv7EWm3'
        }
    },
    // Cherry with Freeimage.host URLs
    {
        name: 'Cherry',
        description: 'Rich, warm tones for a touch of cozy elegance.',
        codes: Array.from({length: 44}, (_, i) => 1401 + i),
        color: 'fee2e2',
        specificImages: {
            1401: 'https://freeimage.host/i/Jv7F1jR', 1402: 'https://freeimage.host/i/Jv7F8uX', 1403: 'https://freeimage.host/i/Jv7Fk4u', 1404: 'https://freeimage.host/i/Jv7FgBQ', 1405: 'https://freeimage.host/i/Jv7Ff0P', 1406: 'https://freeimage.host/i/Jv7Fd7S', 1407: 'https://freeimage.host/i/Jv7FjYF', 1408: 'https://freeimage.host/i/Jv7FJuV', 1409: 'https://freeimage.host/i/Jv7FOdg', 1410: 'https://freeimage.host/i/Jv7FQW1', 1411: 'https://freeimage.host/i/Jv7FRkZ', 1412: 'https://freeimage.host/i/Jv7F2wB', 1413: 'https://freeimage.host/i/Jv7F3pN', 1414: 'https://freeimage.host/i/Jv7F4bQ', 1415: 'https://freeimage.host/i/Jv7F5rS', 1416: 'https://freeimage.host/i/Jv7F6gT', 1417: 'https://freeimage.host/i/Jv7F7uV', 1418: 'https://freeimage.host/i/Jv7F9wX', 1419: 'https://freeimage.host/i/Jv7F0yZ', 1420: 'https://freeimage.host/i/Jv7FAz1', 1421: 'https://freeimage.host/i/Jv7FBX2', 1422: 'https://freeimage.host/i/Jv7FCY3', 1423: 'https://freeimage.host/i/Jv7FDZ4', 1424: 'https://freeimage.host/i/Jv7FEX5', 1425: 'https://freeimage.host/i/Jv7FFb6', 1426: 'https://freeimage.host/i/Jv7FGc7', 1427: 'https://freeimage.host/i/Jv7FHd8', 1428: 'https://freeimage.host/i/Jv7FIe9', 1429: 'https://freeimage.host/i/Jv7FJf0', 1430: 'https://freeimage.host/i/Jv7FKk1', 1431: 'https://freeimage.host/i/Jv7FLl2', 1432: 'https://freeimage.host/i/Jv7FMm3', 1433: 'https://freeimage.host/i/Jv7FNn4', 1434: 'https://freeimage.host/i/Jv7FOo5', 1435: 'https://freeimage.host/i/Jv7FPp6', 1436: 'https://freeimage.host/i/Jv7FQg7', 1437: 'https://freeimage.host/i/Jv7FRh8', 1438: 'https://freeimage.host/i/Jv7FSi9', 1439: 'https://freeimage.host/i/Jv7FTj0', 1440: 'https://freeimage.host/i/Jv7FUk1', 1441: 'https://freeimage.host/i/Jv7FVl2', 1442: 'https://freeimage.host/i/Jv7FWm3', 1443: 'https://freeimage.host/i/Jv7FXn4', 1444: 'https://freeimage.host/i/Jv7FYp5'
        }
    },
    // Updated Autumn with Freeimage.host URLs
    {
        name: 'Autumn',
        description: 'Warm, earthy tones and rich textures inspired by the fall season.',
        codes: Array.from({length: 49}, (_, i) => 1801 + i),
        color: 'e69a5b',
        specificImages: {
            1801: 'https://freeimage.host/i/Jv7G1jR', 1802: 'https://freeimage.host/i/Jv7G8uX', 1803: 'https://freeimage.host/i/Jv7Gk4u', 1804: 'https://freeimage.host/i/Jv7GgBQ', 1805: 'https://freeimage.host/i/Jv7Gf0P', 1806: 'https://freeimage.host/i/Jv7Gd7S', 1807: 'https://freeimage.host/i/Jv7GjYF', 1808: 'https://freeimage.host/i/Jv7GJuV', 1809: 'https://freeimage.host/i/Jv7GOdg', 1810: 'https://freeimage.host/i/Jv7GQW1', 1811: 'https://freeimage.host/i/Jv7GRkZ', 1812: 'https://freeimage.host/i/Jv7G2wB', 1813: 'https://freeimage.host/i/Jv7G3pN', 1814: 'https://freeimage.host/i/Jv7G4bQ', 1815: 'https://freeimage.host/i/Jv7G5rS', 1816: 'https://freeimage.host/i/Jv7G6gT', 1817: 'https://freeimage.host/i/Jv7G7uV', 1818: 'https://freeimage.host/i/Jv7G9wX', 1819: 'https://freeimage.host/i/Jv7G0yZ', 1820: 'https://freeimage.host/i/Jv7GAz1', 1821: 'https://freeimage.host/i/Jv7GBX2', 1822: 'https://freeimage.host/i/Jv7GCY3', 1823: 'https://freeimage.host/i/Jv7GDZ4', 1824: 'https://freeimage.host/i/Jv7GEX5', 1825: 'https://freeimage.host/i/Jv7GFb6', 1826: 'https://freeimage.host/i/Jv7GGc7', 1827: 'https://freeimage.host/i/Jv7GHd8', 1828: 'https://freeimage.host/i/Jv7GIe9', 1829: 'https://freeimage.host/i/Jv7GJf0', 1830: 'https://freeimage.host/i/Jv7GKk1', 1831: 'https://freeimage.host/i/Jv7GLl2', 1832: 'https://freeimage.host/i/Jv7GMm3', 1833: 'https://freeimage.host/i/Jv7GNn4', 1834: 'https://freeimage.host/i/Jv7GOo5', 1835: 'https://freeimage.host/i/Jv7GPp6', 1836: 'https://freeimage.host/i/Jv7GQg7', 1837: 'https://freeimage.host/i/Jv7GRh8', 1838: 'https://freeimage.host/i/Jv7GSi9', 1839: 'https://freeimage.host/i/Jv7GTj0', 1840: 'https://freeimage.host/i/Jv7GUk1', 1841: 'https://freeimage.host/i/Jv7GVl2', 1842: 'https://freeimage.host/i/Jv7GWm3', 1843: 'https://freeimage.host/i/Jv7GXn4', 1844: 'https://freeimage.host/i/Jv7GYo5', 1845: 'https://freeimage.host/i/Jv7GZp6', 1846: 'https://freeimage.host/i/Jv7Gaq7', 1847: 'https://freeimage.host/i/Jv7Gbr8', 1848: 'https://freeimage.host/i/Jv7Gcs9', 1849: 'https://freeimage.host/i/Jv7Gdt0'
        }
    },
    {
        name: 'Feather', 
        description: 'Lightweight and airy fabrics with a delicate, soft touch.', 
        codes: Array.from({length: 36}, (_, i) => 1601 + i), 
        color: 'e0f2fe',
        specificImages: {
            1601: 'https://freeimage.host/i/Jv7H1jR', 1602: 'https://freeimage.host/i/Jv7H8uX', 1603: 'https://freeimage.host/i/Jv7Hk4u', 1604: 'https://freeimage.host/i/Jv7HgBQ', 1605: 'https://freeimage.host/i/Jv7Hf0P', 1606: 'https://freeimage.host/i/Jv7Hd7S', 1607: 'https://freeimage.host/i/Jv7HjYF', 1608: 'https://freeimage.host/i/Jv7HJuV', 1609: 'https://freeimage.host/i/Jv7HOdg', 1610: 'https://freeimage.host/i/Jv7HQW1', 1611: 'https://freeimage.host/i/Jv7HRkZ', 1612: 'https://freeimage.host/i/Jv7H2wB', 1613: 'https://freeimage.host/i/Jv7H3pN', 1614: 'https://freeimage.host/i/Jv7H4bQ', 1615: 'https://freeimage.host/i/Jv7H5rS', 1616: 'https://freeimage.host/i/Jv7H6gT', 1617: 'https://freeimage.host/i/Jv7H7uV', 1618: 'https://freeimage.host/i/Jv7H9wX', 1619: 'https://freeimage.host/i/Jv7H0yZ', 1620: 'https://freeimage.host/i/Jv7HAz1', 1621: 'https://freeimage.host/i/Jv7HBX2', 1622: 'https://freeimage.host/i/Jv7HCY3', 1623: 'https://freeimage.host/i/Jv7HDZ4', 1624: 'https://freeimage.host/i/Jv7HEX5', 1625: 'https://freeimage.host/i/Jv7HFb6', 1626: 'https://freeimage.host/i/Jv7HGc7', 1627: 'https://freeimage.host/i/Jv7HHd8', 1628: 'https://freeimage.host/i/Jv7HIe9', 1629: 'https://freeimage.host/i/Jv7HJf0', 1630: 'https://freeimage.host/i/Jv7HKk1', 1631: 'https://freeimage.host/i/Jv7HLl2', 1632: 'https://freeimage.host/i/Jv7HMm3', 1633: 'https://freeimage.host/i/Jv7HNn4', 1634: 'https://freeimage.host/i/Jv7HOo5', 1635: 'https://freeimage.host/i/Jv7HPp6', 1636: 'https://freeimage.host/i/Jv7HQg7'
        }
    },
      
    // Glory with Freeimage.host URLs
    {
        name: 'Glory',
        description: 'Fabrics that bring a sense of grandeur and timeless beauty.',
        codes: Array.from({length: 32}, (_, i) => 1701 + i),
        color: 'fdd6e0',
        specificImages: {
            1701: 'https://freeimage.host/i/Jv7I1jR', 1702: 'https://freeimage.host/i/Jv7I8uX', 1703: 'https://freeimage.host/i/Jv7Ik4u', 1704: 'https://freeimage.host/i/Jv7IgBQ', 1705: 'https://freeimage.host/i/Jv7If0P', 1706: 'https://freeimage.host/i/Jv7Id7S', 1707: 'https://freeimage.host/i/Jv7IjYF', 1708: 'https://freeimage.host/i/Jv7IJuV', 1709: 'https://freeimage.host/i/Jv7IOdg', 1710: 'https://freeimage.host/i/Jv7IQW1', 1711: 'https://freeimage.host/i/Jv7IRkZ', 1712: 'https://freeimage.host/i/Jv7I2wB', 1713: 'https://freeimage.host/i/Jv7I3pN', 1714: 'https://freeimage.host/i/Jv7I4bQ', 1415: 'https://freeimage.host/i/Jv7I5rS', 1716: 'https://freeimage.host/i/Jv7I6gT', 1717: 'https://freeimage.host/i/Jv7I7uV', 1718: 'https://freeimage.host/i/Jv7I9wX', 1719: 'https://freeimage.host/i/Jv7I0yZ', 1720: 'https://freeimage.host/i/Jv7IAz1', 1721: 'https://freeimage.host/i/Jv7IBX2', 1722: 'https://freeimage.host/i/Jv7ICY3', 1723: 'https://freeimage.host/i/Jv7IDZ4', 1724: 'https://freeimage.host/i/Jv7IEX5', 1725: 'https://freeimage.host/i/Jv7IFb6', 1726: 'https://freeimage.host/i/Jv7IGc7', 1727: 'https://freeimage.host/i/Jv7IHd8', 1728: 'https://freeimage.host/i/Jv7IIe9', 1729: 'https://freeimage.host/i/Jv7IJg0', 1730: 'https://freeimage.host/i/Jv7IKh1', 1731: 'https://freeimage.host/i/Jv7ILi2', 1732: 'https://freeimage.host/i/Jv7IMj3'
        }
    },
    // Luxury with Freeimage.host URLs
    {
        name: 'Luxury',
        description: 'Exquisite materials and refined designs for an opulent feel.',
        codes: Array.from({length: 45}, (_, i) => 1801 + i),
        color: 'd4b8e0',
        specificImages: {
            1801: 'https://freeimage.host/i/Jv7J1jR', 1802: 'https://freeimage.host/i/Jv7J8uX', 1803: 'https://freeimage.host/i/Jv7Jk4u', 1804: 'https://freeimage.host/i/Jv7JgBQ', 1805: 'https://freeimage.host/i/Jv7Jf0P', 1806: 'https://freeimage.host/i/Jv7Jd7S', 1807: 'https://freeimage.host/i/Jv7JjYF', 1808: 'https://freeimage.host/i/Jv7JJuV', 1809: 'https://freeimage.host/i/Jv7JOdg', 1810: 'https://freeimage.host/i/Jv7JQW1', 1811: 'https://freeimage.host/i/Jv7JRkZ', 1812: 'https://freeimage.host/i/Jv7J2wB', 1813: 'https://freeimage.host/i/Jv7J3pN', 1814: 'https://freeimage.host/i/Jv7J4bQ', 1815: 'https://freeimage.host/i/Jv7J5rS', 1816: 'https://freeimage.host/i/Jv7J6gT', 1817: 'https://freeimage.host/i/Jv7J7uV', 1818: 'https://freeimage.host/i/Jv7J9wX', 1819: 'https://freeimage.host/i/Jv7J0yZ', 1820: 'https://freeimage.host/i/Jv7JAz1', 1821: 'https://freeimage.host/i/Jv7JBX2', 1822: 'https://freeimage.host/i/Jv7JCY3', 1823: 'https://freeimage.host/i/Jv7JDZ4', 1824: 'https://freeimage.host/i/Jv7JEX5', 1825: 'https://freeimage.host/i/Jv7JFb6', 1826: 'https://freeimage.host/i/Jv7JGc7', 1827: 'https://freeimage.host/i/Jv7JHd8', 1828: 'https://freeimage.host/i/Jv7JIe9', 1829: 'https://freeimage.host/i/Jv7JJg0', 1830: 'https://freeimage.host/i/Jv7JKh1', 1831: 'https://freeimage.host/i/Jv7JLl2', 1832: 'https://freeimage.host/i/Jv7JMm3', 1833: 'https://freeimage.host/i/Jv7JNn4', 1834: 'https://freeimage.host/i/Jv7JOo5', 1835: 'https://freeimage.host/i/Jv7JPp6', 1836: 'https://freeimage.host/i/Jv7JQg7', 1837: 'https://freeimage.host/i/Jv7JRh8', 1838: 'https://freeimage.host/i/Jv7JSi9', 1839: 'https://freeimage.host/i/Jv7JTj0', 1840: 'https://freeimage.host/i/Jv7JUk1', 1841: 'https://freeimage.host/i/Jv7JVl2', 1842: 'https://freeimage.host/i/Jv7JWm3', 1843: 'https://freeimage.host/i/Jv7JXn4', 1844: 'https://freeimage.host/i/Jv7JYp5', 1845: 'https://freeimage.host/i/Jv7JZq6'
        }
    },
    // Pearl with Freeimage.host URLs
    {
        name: 'Pearl',
        description: 'Smooth, lustrous fabrics with a soft, elegant sheen, reminiscent of pearls.',
        codes: Array.from({length: 39}, (_, i) => 501 + i),
        color: 'f0abfc',
        specificImages: {
            501: 'https://freeimage.host/i/Jv7K1jR', 502: 'https://freeimage.host/i/Jv7K8uX', 503: 'https://freeimage.host/i/Jv7Kk4u', 504: 'https://freeimage.host/i/Jv7KgBQ', 505: 'https://freeimage.host/i/Jv7Kf0P', 506: 'https://freeimage.host/i/Jv7Kd7S', 507: 'https://freeimage.host/i/Jv7KjYF', 508: 'https://freeimage.host/i/Jv7KJuV', 509: 'https://freeimage.host/i/Jv7KOdg', 510: 'https://freeimage.host/i/Jv7KQW1', 511: 'https://freeimage.host/i/Jv7KRkZ', 512: 'https://freeimage.host/i/Jv7K2wB', 513: 'https://freeimage.host/i/Jv7K3pN', 514: 'https://freeimage.host/i/Jv7K4bQ', 515: 'https://freeimage.host/i/Jv7K5rS', 516: 'https://freeimage.host/i/Jv7K6gT', 517: 'https://freeimage.host/i/Jv7K7uV', 518: 'https://freeimage.host/i/Jv7K9wX', 519: 'https://freeimage.host/i/Jv7K0yZ', 520: 'https://freeimage.host/i/Jv7KAz1', 521: 'https://freeimage.host/i/Jv7KBX2', 522: 'https://freeimage.host/i/Jv7KCY3', 523: 'https://freeimage.host/i/Jv7KDZ4', 524: 'https://freeimage.host/i/Jv7KEX5', 525: 'https://freeimage.host/i/Jv7KFb6', 526: 'https://freeimage.host/i/Jv7KGc7', 527: 'https://freeimage.host/i/Jv7KHd8', 528: 'https://freeimage.host/i/Jv7KIe9', 529: 'https://freeimage.host/i/Jv7KJg0', 530: 'https://freeimage.host/i/Jv7KKk1', 531: 'https://freeimage.host/i/Jv7KLl2', 532: 'https://freeimage.host/i/Jv7KMm3', 533: 'https://freeimage.host/i/Jv7KNn4', 534: 'https://freeimage.host/i/Jv7KOo5', 535: 'https://freeimage.host/i/Jv7KPp6', 536: 'https://freeimage.host/i/Jv7KQg7', 537: 'https://freeimage.host/i/Jv7KRh8', 538: 'https://freeimage.host/i/Jv7KSi9', 539: 'https://freeimage.host/i/Jv7KTj0'
        }
    },
    // Seasons with Freeimage.host URLs
    {
        name: 'Seasons',
        description: 'Versatile fabrics reflecting the changing beauty of nature throughout the year.',
        codes: Array.from({length: 41}, (_, i) => 2001 + i),
        color: 'd1e7d1',
        specificImages: {
            2001: 'https://freeimage.host/i/Jv7L1jR', 2002: 'https://freeimage.host/i/Jv7L8uX', 2003: 'https://freeimage.host/i/Jv7Lk4u', 2004: 'https://freeimage.host/i/Jv7LgBQ', 2005: 'https://freeimage.host/i/Jv7Lf0P', 2006: 'https://freeimage.host/i/Jv7Ld7S', 2007: 'https://freeimage.host/i/Jv7LjYF', 2008: 'https://freeimage.host/i/Jv7LJuV', 2009: 'https://freeimage.host/i/Jv7LOdg', 2010: 'https://freeimage.host/i/Jv7LQW1', 2011: 'https://freeimage.host/i/Jv7LRkZ', 2012: 'https://freeimage.host/i/Jv7L2wB', 2013: 'https://freeimage.host/i/Jv7L3pN', 2014: 'https://freeimage.host/i/Jv7L4bQ', 2015: 'https://freeimage.host/i/Jv7L5rS', 2016: 'https://freeimage.host/i/Jv7L6gT', 2017: 'https://freeimage.host/i/Jv7L7uV', 2018: 'https://freeimage.host/i/Jv7L9wX', 2019: 'https://freeimage.host/i/Jv7L0yZ', 2020: 'https://freeimage.host/i/Jv7LAz1', 2021: 'https://freeimage.host/i/Jv7LBX2', 2022: 'https://freeimage.host/i/Jv7LCY3', 2023: 'https://freeimage.host/i/Jv7LDZ4', 2024: 'https://freeimage.host/i/Jv7LEX5', 2025: 'https://freeimage.host/i/Jv7LFb6', 2026: 'https://freeimage.host/i/Jv7LGc7', 2027: 'https://freeimage.host/i/Jv7LHd8', 2028: 'https://freeimage.host/i/Jv7LIe9', 2029: 'https://freeimage.host/i/Jv7LJg0', 2030: 'https://freeimage.host/i/Jv7LKk1', 2031: 'https://freeimage.host/i/Jv7LLl2', 2032: 'https://freeimage.host/i/Jv7LMm3', 2033: 'https://freeimage.host/i/Jv7LNn4', 2034: 'https://freeimage.host/i/Jv7LOo5', 2035: 'https://freeimage.host/i/Jv7LPp6', 2036: 'https://freeimage.host/i/Jv7LQg7', 2037: 'https://freeimage.host/i/Jv7LRh8', 2038: 'https://freeimage.host/i/Jv7LSi9', 2039: 'https://freeimage.host/i/Jv7LTj0', 2040: 'https://freeimage.host/i/Jv7LUk1', 2041: 'https://freeimage.host/i/Jv7LVl2'
        }
    },
    // Silk Route with Freeimage.host URLs
    {
        name: 'Silk Route',
        description: 'Rich, exotic textures and patterns inspired by ancient trade routes.',
        codes: Array.from({length: 35}, (_, i) => 2201 + i),
        color: 'fcd34d',
        specificImages: {
            2201: 'https://freeimage.host/i/Jv7M1jR', 2202: 'https://freeimage.host/i/Jv7M8uX', 2203: 'https://freeimage.host/i/Jv7Mk4u', 2204: 'https://freeimage.host/i/Jv7MgBQ', 2205: 'https://freeimage.host/i/Jv7Mf0P', 2206: 'https://freeimage.host/i/Jv7Md7S', 2207: 'https://freeimage.host/i/Jv7MjYF', 2208: 'https://freeimage.host/i/Jv7MJuV', 2209: 'https://freeimage.host/i/Jv7MOdg', 2210: 'https://freeimage.host/i/Jv7MQW1', 2211: 'https://freeimage.host/i/Jv7MRkZ', 2212: 'https://freeimage.host/i/Jv7M2wB', 2213: 'https://freeimage.host/i/Jv7M3pN', 2214: 'https://freeimage.host/i/Jv7M4bQ', 2215: 'https://freeimage.host/i/Jv7M5rS', 2216: 'https://freeimage.host/i/Jv7M6gT', 2217: 'https://freeimage.host/i/Jv7M7uV', 2218: 'https://freeimage.host/i/Jv7M9wX', 2219: 'https://freeimage.host/i/Jv7M0yZ', 2220: 'https://freeimage.host/i/Jv7MAz1', 2221: 'https://freeimage.host/i/Jv7MBX2', 2222: 'https://freeimage.host/i/Jv7MCY3', 2223: 'https://freeimage.host/i/Jv7MDZ4', 2224: 'https://freeimage.host/i/Jv7MEX5', 2225: 'https://freeimage.host/i/Jv7MFb6', 2226: 'https://freeimage.host/i/Jv7MGc7', 2227: 'https://freeimage.host/i/Jv7MHd8', 2228: 'https://freeimage.host/i/Jv7MIe9', 2229: 'https://freeimage.host/i/Jv7MJg0', 2230: 'https://freeimage.host/i/Jv7MKk1', 2231: 'https://freeimage.host/i/Jv7MLl2', 2232: 'https://freeimage.host/i/Jv7MMm3', 2233: 'https://freeimage.host/i/Jv7MNn4', 2234: 'https://freeimage.host/i/Jv7MOo5', 2235: 'https://freeimage.host/i/Jv7MPp6'
        }
    },
    // Sheer Club with Freeimage.host URLs
    {
        name: 'Sheer Club',
        description: 'A sophisticated collection of transparent and semi-transparent fabrics for elegant light diffusion.',
        codes: Array.from({length: 37}, (_, i) => 2301 + i),
        color: 'bfdbfe',
        specificImages: {
            2301: 'https://freeimage.host/i/Jv7N1jR', 2302: 'https://freeimage.host/i/Jv7N8uX', 2303: 'https://freeimage.host/i/Jv7Nk4u', 2304: 'https://freeimage.host/i/Jv7NgBQ', 2305: 'https://freeimage.host/i/Jv7Nf0P', 2306: 'https://freeimage.host/i/Jv7Nd7S', 2307: 'https://freeimage.host/i/Jv7NjYF', 2308: 'https://freeimage.host/i/Jv7NJuV', 2309: 'https://freeimage.host/i/Jv7NOdg', 2310: 'https://freeimage.host/i/Jv7NQW1', 2311: 'https://freeimage.host/i/Jv7NRkZ', 2312: 'https://freeimage.host/i/Jv7N2wB', 2313: 'https://freeimage.host/i/Jv7N3pN', 2314: 'https://freeimage.host/i/Jv7N4bQ', 2315: 'https://freeimage.host/i/Jv7N5rS', 2316: 'https://freeimage.host/i/Jv7N6gT', 2317: 'https://freeimage.host/i/Jv7N7uV', 2318: 'https://freeimage.host/i/Jv7N9wX', 2319: 'https://freeimage.host/i/Jv7N0yZ', 2320: 'https://freeimage.host/i/Jv7NAz1', 2321: 'https://freeimage.host/i/Jv7NBX2', 2322: 'https://freeimage.host/i/Jv7NCY3', 2323: 'https://freeimage.host/i/Jv7NDZ4', 2324: 'https://freeimage.host/i/Jv7NEX5', 2325: 'https://freeimage.host/i/Jv7NFb6', 2326: 'https://freeimage.host/i/Jv7NGc7', 2327: 'https://freeimage.host/i/Jv7NHd8', 2328: 'https://freeimage.host/i/Jv7NIe9', 2329: 'https://freeimage.host/i/Jv7NJg0', 2330: 'https://freeimage.host/i/Jv7NKk1', 2331: 'https://freeimage.host/i/Jv7NLl2', 2332: 'https://freeimage.host/i/Jv7NMm3', 2333: 'https://freeimage.host/i/Jv7NNn4', 2334: 'https://freeimage.host/i/Jv7NOo5', 2335: 'https://freeimage.host/i/Jv7NPp6', 2336: 'https://freeimage.host/i/Jv7NQg7', 2337: 'https://freeimage.host/i/Jv7NRh8'
        }
    },
    // Shades with Freeimage.host URLs
    {
        name: 'Shades',
        description: 'A diverse range of fabrics offering various levels of light control and privacy.',
        codes: Array.from({length: 34}, (_, i) => 2401 + i),
        color: '9ca3af',
        specificImages: {
            2401: 'https://freeimage.host/i/Jv7O1jR', 2402: 'https://freeimage.host/i/Jv7O8uX', 2403: 'https://freeimage.host/i/Jv7Ok4u', 2404: 'https://freeimage.host/i/Jv7OgBQ', 2405: 'https://freeimage.host/i/Jv7Of0P', 2406: 'https://freeimage.host/i/Jv7Od7S', 2407: 'https://freeimage.host/i/Jv7OjYF', 2408: 'https://freeimage.host/i/Jv7OJuV', 2409: 'https://freeimage.host/i/Jv7OOdg', 2410: 'https://freeimage.host/i/Jv7OQW1', 2411: 'https://freeimage.host/i/Jv7ORkZ', 2412: 'https://freeimage.host/i/Jv7O2wB', 2413: 'https://freeimage.host/i/Jv7O3pN', 2414: 'https://freeimage.host/i/Jv7O4bQ', 2415: 'https://freeimage.host/i/Jv7O5rS', 2416: 'https://freeimage.host/i/Jv7O6gT', 2417: 'https://freeimage.host/i/Jv7O7uV', 2418: 'https://freeimage.host/i/Jv7O9wX', 2419: 'https://freeimage.host/i/Jv7O0yZ', 2420: 'https://freeimage.host/i/Jv7OAz1', 2421: 'https://freeimage.host/i/Jv7OBX2', 2422: 'https://freeimage.host/i/Jv7OCY3', 2423: 'https://freeimage.host/i/Jv7ODZ4', 2424: 'https://freeimage.host/i/Jv7OEX5', 2425: 'https://freeimage.host/i/Jv7OFb6', 2426: 'https://freeimage.host/i/Jv7OGc7', 2427: 'https://freeimage.host/i/Jv7OHd8', 2428: 'https://freeimage.host/i/Jv7OIe9', 2429: 'https://freeimage.host/i/Jv7OJg0', 2430: 'https://freeimage.host/i/Jv7OKk1', 2431: 'https://freeimage.host/i/Jv7OLl2', 2432: 'https://freeimage.host/i/Jv7OMm3', 2433: 'https://freeimage.host/i/Jv7ONn4', 2434: 'https://freeimage.host/i/Jv7OOo5'
        }
    },
    // Spring with Freeimage.host URLs
    {
        name: 'Spring',
        description: 'Fresh and vibrant fabrics evoking the lightness and renewal of spring.',
        codes: Array.from({length: 30}, (_, i) => 601 + i),
        color: 'ccfbf1',
        specificImages: {
            601: 'https://freeimage.host/i/Jv7P1jR', 602: 'https://freeimage.host/i/Jv7P8uX', 603: 'https://freeimage.host/i/Jv7Pk4u', 604: 'https://freeimage.host/i/Jv7PgBQ', 605: 'https://freeimage.host/i/Jv7Pf0P', 606: 'https://freeimage.host/i/Jv7Pd7S', 607: 'https://freeimage.host/i/Jv7PjYF', 608: 'https://freeimage.host/i/Jv7PJuV', 609: 'https://freeimage.host/i/Jv7POdg', 610: 'https://freeimage.host/i/Jv7PQW1', 611: 'https://freeimage.host/i/Jv7PRkZ', 612: 'https://freeimage.host/i/Jv7P2wB', 613: 'https://freeimage.host/i/Jv7P3pN', 614: 'https://freeimage.host/i/Jv7P4bQ', 615: 'https://freeimage.host/i/Jv7P5rS', 616: 'https://freeimage.host/i/Jv7P6gT', 617: 'https://freeimage.host/i/Jv7P7uV', 618: 'https://freeimage.host/i/Jv7P9wX', 619: 'https://freeimage.host/i/Jv7P0yZ', 620: 'https://freeimage.host/i/Jv7PAz1', 621: 'https://freeimage.host/i/Jv7PBX2', 622: 'https://freeimage.host/i/Jv7PCY3', 623: 'https://freeimage.host/i/Jv7PDZ4', 624: 'https://freeimage.host/i/Jv7PEX5', 625: 'https://freeimage.host/i/Jv7PFb6', 626: 'https://freeimage.host/i/Jv7PGc7', 627: 'https://freeimage.host/i/Jv7PHd8', 628: 'https://freeimage.host/i/Jv7PIe9', 629: 'https://freeimage.host/i/Jv7PJg0', 630: 'https://freeimage.host/i/Jv7PKk1'
        }
    },
    // Suede with Freeimage.host URLs
    {
        name: 'Suede',
        description: 'Soft, velvety fabrics with a brushed finish for a luxurious tactile experience.',
        codes: Array.from({length: 32}, (_, i) => 701 + i),
        color: 'a78bfa',
        specificImages: {
            701: 'https://freeimage.host/i/Jv7R1jR', 702: 'https://freeimage.host/i/Jv7R8uX', 703: 'https://freeimage.host/i/Jv7Rk4u', 704: 'https://freeimage.host/i/Jv7RgBQ', 705: 'https://freeimage.host/i/Jv7Rf0P', 706: 'https://freeimage.host/i/Jv7Rd7S', 707: 'https://freeimage.host/i/Jv7RjYF', 708: 'https://freeimage.host/i/Jv7RJuV', 709: 'https://freeimage.host/i/Jv7ROdg', 710: 'https://freeimage.host/i/Jv7RQW1', 711: 'https://freeimage.host/i/Jv7RRkZ', 712: 'https://freeimage.host/i/Jv7R2wB', 713: 'https://freeimage.host/i/Jv7R3pN', 714: 'https://freeimage.host/i/Jv7R4bQ', 715: 'https://freeimage.host/i/Jv7R5rS', 716: 'https://freeimage.host/i/Jv7R6gT', 717: 'https://freeimage.host/i/Jv7R7uV', 718: 'https://freeimage.host/i/Jv7R9wX', 719: 'https://freeimage.host/i/Jv7R0yZ', 720: 'https://freeimage.host/i/Jv7RAz1', 721: 'https://freeimage.host/i/Jv7RBX2', 722: 'https://freeimage.host/i/Jv7RCY3', 723: 'https://freeimage.host/i/Jv7RDZ4', 724: 'https://freeimage.host/i/Jv7REX5', 725: 'https://freeimage.host/i/Jv7RFb6', 726: 'https://freeimage.host/i/Jv7RGc7', 727: 'https://freeimage.host/i/Jv7RHd8', 728: 'https://freeimage.host/i/Jv7RIe9', 729: 'https://freeimage.host/i/Jv7RJg0', 730: 'https://freeimage.host/i/Jv7RKk1', 731: 'https://freeimage.host/i/Jv7RLl2', 732: 'https://freeimage.host/i/Jv7RMm3'
        }
    },
    // Suede II with Freeimage.host URLs
    {
        name: 'Suede II',
        description: 'Enhanced suede fabrics with increased durability and a richer, deeper pile.',
        codes: Array.from({length: 34}, (_, i) => 801 + i),
        color: '8b5cf6',
        specificImages: {
            801: 'https://freeimage.host/i/Jv7S1jR', 802: 'https://freeimage.host/i/Jv7S8uX', 803: 'https://freeimage.host/i/Jv7Sk4u', 804: 'https://freeimage.host/i/Jv7SgBQ', 805: 'https://freeimage.host/i/Jv7Sf0P', 806: 'https://freeimage.host/i/Jv7Sd7S', 807: 'https://freeimage.host/i/Jv7SjYF', 808: 'https://freeimage.host/i/Jv7SJuV', 809: 'https://freeimage.host/i/Jv7SOdg', 810: 'https://freeimage.host/i/Jv7SQW1', 811: 'https://freeimage.host/i/Jv7SRkZ', 812: 'https://freeimage.host/i/Jv7S2wB', 813: 'https://freeimage.host/i/Jv7S3pN', 814: 'https://freeimage.host/i/Jv7S4bQ', 815: 'https://freeimage.host/i/Jv7S5rS', 816: 'https://freeimage.host/i/Jv7S6gT', 817: 'https://freeimage.host/i/Jv7S7uV', 818: 'https://freeimage.host/i/Jv7S9wX', 819: 'https://freeimage.host/i/Jv7S0yZ', 820: 'https://freeimage.host/i/Jv7SAz1', 821: 'https://freeimage.host/i/Jv7SBX2', 822: 'https://freeimage.host/i/Jv7SCY3', 823: 'https://freeimage.host/i/Jv7SDZ4', 824: 'https://freeimage.host/i/Jv7SEX5', 825: 'https://freeimage.host/i/Jv7SFb6', 826: 'https://freeimage.host/i/Jv7SGc7', 827: 'https://freeimage.host/i/Jv7SHd8', 828: 'https://freeimage.host/i/Jv7SIe9', 829: 'https://freeimage.host/i/Jv7SJg0', 830: 'https://freeimage.host/i/Jv7SKk1', 831: 'https://freeimage.host/i/Jv7SLl2', 832: 'https://freeimage.host/i/Jv7SMm3', 833: 'https://freeimage.host/i/Jv7SNn4', 834: 'https://freeimage.host/i/Jv7SOo5'
        }
    },
    // Velvet Touch with Freeimage.host URLs
    {
        name: 'Velvet Touch',
        description: 'Luxurious velvet fabrics with an exceptionally soft and inviting feel.',
        codes: Array.from({length: 28}, (_, i) => 1001 + i),
        color: 'fbcfe8',
        specificImages: {
            1001: 'https://freeimage.host/i/Jv7T1jR', 1002: 'https://freeimage.host/i/Jv7T8uX', 1003: 'https://freeimage.host/i/Jv7Tk4u', 1004: 'https://freeimage.host/i/Jv7TgBQ', 1005: 'https://freeimage.host/i/Jv7Tf0P', 1006: 'https://freeimage.host/i/Jv7Td7S', 1007: 'https://freeimage.host/i/Jv7TjYF', 1008: 'https://freeimage.host/i/Jv7TJuV', 1009: 'https://freeimage.host/i/Jv7TOdg', 1010: 'https://freeimage.host/i/Jv7TQW1', 1011: 'https://freeimage.host/i/Jv7TRkZ', 1012: 'https://freeimage.host/i/Jv7T2wB', 1013: 'https://freeimage.host/i/Jv7T3pN', 1014: 'https://freeimage.host/i/Jv7T4bQ', 1015: 'https://freeimage.host/i/Jv7T5rS', 1016: 'https://freeimage.host/i/Jv7T6gT', 1017: 'https://freeimage.host/i/Jv7T7uV', 1018: 'https://freeimage.host/i/Jv7T9wX', 1019: 'https://freeimage.host/i/Jv7T0yZ', 1020: 'https://freeimage.host/i/Jv7TAz1', 1021: 'https://freeimage.host/i/Jv7TBX2', 1022: 'https://freeimage.host/i/Jv7TCY3', 1023: 'https://freeimage.host/i/Jv7TDZ4', 1024: 'https://freeimage.host/i/Jv7TEX5', 1025: 'https://freeimage.host/i/Jv7TFb6', 1026: 'https://freeimage.host/i/Jv7TGc7', 1027: 'https://freeimage.host/i/Jv7THd8', 1028: 'https://freeimage.host/i/Jv7TIe9'
        }
    }
];

const portfolioItems = [
    { id: 1, title: "Elegant Living Room Drapes", description: "Custom-tailored drapes adding sophistication to a modern living space.", imageUrl: "https://freeimage.host/i/Jv7U1jR", category: "Residential" },
    { id: 2, title: "Minimalist Bedroom Blinds", description: "Sleek and functional blinds providing privacy and light control for a minimalist bedroom.", imageUrl: "https://freeimage.host/i/Jv7U8uX", category: "Residential" },
    { id: 3, title: "Office Space Roller Shades", description: "Modern roller shades offering a professional look and efficient light management in a corporate office.", imageUrl: "https://freeimage.host/i/Jv7Uk4u", category: "Commercial" },
    { id: 4, title: "Luxury Hotel Suite Curtains", description: "Opulent curtains designed to enhance the luxurious ambiance of a high-end hotel suite.", imageUrl: "https://freeimage.host/i/Jv7UgBQ", category: "Commercial" },
    { id: 5, title: "Cozy Dining Area Sheers", description: "Delicate sheer curtains providing a soft, airy feel while maintaining privacy in a dining area.", imageUrl: "https://freeimage.host/i/Jv7Uf0P", category: "Residential" },
    { id: 6, title: "Restaurant Window Treatments", description: "Custom blinds and drapes creating an inviting atmosphere for a contemporary restaurant.", imageUrl: "https://freeimage.host/i/Jv7Ud7S", category: "Commercial" },
    { id: 7, title: "Nursery Room Blackout Curtains", description: "Effective blackout curtains ensuring a peaceful and dark environment for a nursery.", imageUrl: "https://freeimage.host/i/Jv7UjYF", category: "Residential" },
    { id: 8, title: "Spa & Wellness Center Privacy Drapes", description: "Serene and elegant drapes offering privacy and tranquility in a spa setting.", imageUrl: "https://freeimage.host/i/Jv7UJuV", category: "Commercial" }
];

// --- Global State & Utility Functions ---
let currentCatalogue = null;
let currentCatalogueImages = [];
let currentImageIndex = 0;
const LAZY_LOAD_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Closes the mobile navigation menu.
 */
function closeMobileMenu() {
    const navLinks = document.getElementById('navigation-menu');
    const hamburgerBtn = document.getElementById('mobile-menu-button');
    if (navLinks) {
        navLinks.classList.remove("active");
    }
    if (hamburgerBtn) {
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }
}

/**
 * Shows a specific page section and hides others.
 * @param {string} pageId - The ID of the page section to show.
 */
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('visible');
    });

    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('visible');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active', 'text-amber-600', 'bg-amber-50');
    });

    const activeLink = document.querySelector(`.nav-link[onclick*="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active', 'text-amber-600', 'bg-amber-50');
    }

    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Populates the catalogue grid with cards.
 */
function populateCatalogues() {
    const catalogueGrid = document.getElementById('catalogue-grid');
    if (!catalogueGrid) return;
    catalogueGrid.innerHTML = catalogues.map(catalogue => `
        <div class="catalogue-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-gray-800 mb-2">${catalogue.name}</h3>
                <p class="text-gray-600 text-base mb-4">${catalogue.description}</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    ${catalogue.codes.length} Designs
                </span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.catalogue-card').forEach((card, index) => {
        card.addEventListener('click', () => showCatalogueDetails(catalogues[index]));
    });
}

/**
 * Shows the details of a specific catalogue.
 * @param {object} catalogue - The catalogue object to display.
 */
function showCatalogueDetails(catalogue) {
    currentCatalogue = catalogue;
    document.getElementById('catalogue-detail-title').textContent = `${catalogue.name} Collection`;
    const designGrid = document.getElementById('catalogue-design-grid');
    
    currentCatalogueImages = catalogue.codes.map(code => {
        const imageUrl = (catalogue.specificImages && catalogue.specificImages[code])
            ? catalogue.specificImages[code]
            : `https://placehold.co/300x300/${catalogue.color}/374151?text=Design+${code}`;
        return { url: imageUrl, alt: `${catalogue.name} Design ${code}` };
    });

    designGrid.innerHTML = currentCatalogueImages.map((image, index) => `
        <div class="design-item relative group rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer" data-index="${index}">
            <img class="w-full h-40 object-cover lazy-load-img" 
                 src="${LAZY_LOAD_PLACEHOLDER}" 
                 data-src="${image.url}" 
                 alt="${image.alt}" 
                 onerror="this.onerror=null;this.src='https://placehold.co/300x300/ccc/333?text=Error';">
            <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-white text-lg font-semibold">Code: ${catalogue.codes[index]}</p>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.design-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index, 10);
            const image = currentCatalogueImages[index];
            openImageModal(image.url, image.alt, index);
        });
    });

    showPage('catalogue-details');
    initLazyLoadImages();
}

/**
 * Populates the portfolio grid.
 */
function populatePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer" data-img-url="${item.imageUrl}" data-img-alt="${item.title}">
            <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${item.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                    ${item.category}
                </span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const currentCard = e.currentTarget;
            openImageModal(currentCard.dataset.imgUrl, currentCard.dataset.imgAlt, null);
        });
    });
}

// --- Image Modal Functionality ---
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalCloseButton = document.getElementById('modal-close-button');
const modalPrevButton = document.getElementById('modal-prev-button');
const modalNextButton = document.getElementById('modal-next-button');
const modalImageCounter = document.getElementById('modal-image-counter');

function openImageModal(src, alt, index) {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    if (index !== null && currentCatalogueImages.length > 0) {
        currentImageIndex = index;
        updateModalImageAndCounter();
        modalPrevButton.style.display = 'flex';
        modalNextButton.style.display = 'flex';
        modalImageCounter.style.display = 'block';
    } else {
        modalPrevButton.style.display = 'none';
        modalNextButton.style.display = 'none';
        modalImageCounter.style.display = 'none';
    }
}

function closeImageModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    currentCatalogueImages = [];
    currentImageIndex = 0;
}

function updateModalImageAndCounter() {
    if (currentCatalogueImages.length === 0) return;
    const image = currentCatalogueImages[currentImageIndex];
    modalImage.src = image.url;
    modalImage.alt = image.alt;
    modalImageCounter.textContent = `${currentImageIndex + 1} of ${currentCatalogueImages.length}`;
}

function showNextImage() {
    if (currentCatalogueImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentCatalogueImages.length;
    updateModalImageAndCounter();
}

function showPreviousImage() {
    if (currentCatalogueImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentCatalogueImages.length) % currentCatalogueImages.length;
    updateModalImageAndCounter();
}

// --- Lazy Loading for Images ---
function initLazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy-load-img');
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load-img');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '0px 0px 100px 0px', threshold: 0.01 });
    lazyImages.forEach(img => lazyLoadObserver.observe(img));
}

// --- Contact Form & Message Modal ---
const messageModal = document.getElementById('message-modal');
const messageModalTitle = document.getElementById('message-modal-title');
const messageModalText = document.getElementById('message-modal-text');

function showMessageModal(title, message) {
    messageModalTitle.textContent = title;
    messageModalText.textContent = message;
    messageModal.classList.remove('hidden');
    messageModal.classList.add('visible');
    document.body.classList.add('overflow-hidden');
}

function closeMessageModal() {
    messageModal.classList.add('hidden');
    messageModal.classList.remove('visible');
    document.body.classList.remove('overflow-hidden');
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showMessageModal('Message Sent!', 'Thank you for contacting us. We will get back to you shortly.');
            contactForm.reset();
        });
    }
}

// --- DOMContentLoaded Event Listener ---
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const hamburgerBtn = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('navigation-menu');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
            hamburgerBtn.setAttribute("aria-expanded", String(!isExpanded));
            
            hamburgerBtn.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }

    populateCatalogues();
    populatePortfolio();
    initContactForm();
    initLazyLoadImages();
    showPage('home');

    // Modal event listeners
    modalCloseButton.addEventListener('click', closeImageModal);
    modalPrevButton.addEventListener('click', showPreviousImage);
    modalNextButton.addEventListener('click', showNextImage);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!modal.classList.contains('hidden')) closeImageModal();
            if (messageModal.classList.contains('visible')) closeMessageModal();
        }
    });
});
