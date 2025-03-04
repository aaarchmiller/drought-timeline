export default {
    timelineEvents: [
      {
        id: 'quote_dustbowl', // Unique id for annotation - order and # value don't matter - annotations are later sorted by date
        date: '1934-06-01', // Date marking start of annotation. Determines y placement on mobile AND scroll order for annotations on mobile
        text: '"Dust to eat, and dust to breathe and dust to drink. Dust in the beds and in the flour bin, on dishes and walls and windows, in hair and eyes and ears and teeth and throats, to say nothing of the heaped up accumulation on floors and window sills after one of the bad days.” - <a href="https://americanexperience.si.edu/historical-eras/the-great-depression-wwii/pair-dust-bowl-valley-farms/" target="_blank">Letter from Caroline Henderson to Secretary of Agriculture Henry A. Wallace, 1935</a>', // Text of annotation
        quote: true, // required for quote, for styling
        mobile_x_offset_per: 70 // x placement of circle on mobile, as percent of chart width (0 = left edge, 100 = right edge)
      },
      {
        id: 'quote_1950s',
        date: '1955-06-01',
        text: '“It started out west. It tended to get dry out there and not rain, and that lack of rainfall just moved east. My dad kept saying, ‘We have these things; they’ll just go about eighteen months. It’ll break.’ But that’s what caught everybody off guard: it didn’t break. It just kept on going, and it lasted about seven years.” - <a href="https://www.texasmonthly.com/articles/when-the-sky-ran-dry/" target="_blank">Mort Mertz, West Texas rancher since 1954</a>',
        quote: true,
        mobile_x_offset_per: 95
      },
      {
        id: 'quote_1960s',
        date: '1965-04-01',
        text: '“The unusually long and severe water shortages in the Northeast during the 1960s emphasized the fact that drought is a national problem, and is not limited to any single geographic region or climate.” - <a href="https://www.usgs.gov/publications/northeast-water-supply-crisis-1960s" target="_blank">Henry C. Barksdale, 1968</a>',
        quote: true,
        mobile_x_offset_per: 70
      },
      {
        id: 'quote1980s',
        date: '1990-02-15',
        text: '"The 1988 drought dramatically illustrates how quickly several years of excess precipitation can change to widespread drought.” - <a href="https://files.dnr.state.mn.us/natural_resources/climate/summaries_and_publications/drought1988.pdf" target="_blank">Minnesota Department of Natural Resources, Division of Waters, 1989</a>',
        quote: true,
        mobile_x_offset_per: 80
      },
      {
        id: 'quoteTOC',
        date: '2003-08-01',
        text: '“2000-2021 ranks as the driest 22-year period since at least 800 CE.” - <a href="https://www.nature.com/articles/s41558-022-01290-z" target="_blank">A. Park Williams, Benjamin I. Cook, and Jason E. Smerdon, 2022</a>',
        quote: true,
        mobile_x_offset_per: 65
      },
      {
        id: 'intro_map_1',
        date: '1923-03-01',
        text: 'Map of streamgage locations that had one of the 2000 most severe droughts. Streamgage locations in each major drought period are highlighted on the map in red.',
        mobile_x_offset_per: 70
      },
      {
        id: 'intro_narration',
        date: '1921-07-01',
        text: 'This timeline shows the 2,000 most severe streamflow drought events at USGS streamgages over 100 years (<a href="https://labs.waterdata.usgs.gov/visualizations/what-is-drought/index.html#/" target="_blank">What is Streamflow Drought?</a>). Each bar shows the duration of drought at a single gage so that the taller and darker the bar, the longer the drought event. When multiple streamgages experienced drought conditions simultaneously, the chart is wider.',
        mobile_x_offset_per: 45
      },
      {
        id: 'dustbowl_1',
        date: '1930-03-01',
        text: 'Dust Bowl: Drought hit much of the U.S. in the 1930s, bringing hardship to the farmers and ranchers of the Great Plains. Not enough rain combined with too much farming and grazing made the top layer of soil loose and dry. Heavy winds blew the dry soil into massive dust storms, which is why we call this period in history the “Dust Bowl.”',
        mobile_x_offset_per: 24
      },
      {
        id: 'dustbowl_2',
        date: '1940-06-01',
        text: 'The Dust Bowl Drought ended in 1941, but the lessons learned from the Dust Bowl continue to shape the farming and grazing practices we use today. Because USGS did not have many streamgages on the landscape during the Dust Bowl, we do not have a strong record of how widespread streamflow drought was at this time.',
        mobile_x_offset_per: 24
      },
      {
        id: '1950s_1',
        date: '1953-04-01',
        text: '1950s Drought: The drought of the 1950s was the biggest in terms of area of land affected. About 80% of hydrologic units (areas of connected streams) received less than half the normal amount of precipitation (<a href="https://doi.org/10.1002/joc.7904" target="_blank">McCabe et al. 2022</a>).',
        mobile_x_offset_per: 28
      } ,
      {
        id: '1950s_2',
        date: '1958-04-01',
        text: 'The lessons learned from the Dust Bowl helped people prepare for and respond to the 1950s drought, but farmers and ranchers still experienced hardship, especially in already dry areas like Texas. Texas developed its modern approach to water planning because of how badly the 1950s drought hurt its rural communities.',
        mobile_x_offset_per: 58
      } ,
      {
        id: '1960s_1',
        date: '1963-05-01',
        text: '1960s Drought: The 1960s drought was the most severe drought to hit the northeastern U.S. in the last 100 years. The northeastern states did not have experience with droughts, so their emergency reserves of water were not large enough to cover a long dry period.',
        mobile_x_offset_per: 27
      },
      {
        id: '1960s_2',
        date: '1968-05-01',
        text: 'As the region drained its water reserves, the concentration of hazardous pollutants in the water went up, making the remaining water less safe to use. The northeastern states and federal agencies worked together to develop new water conservation and management policies, which provided some relief until the rains returned.',
        mobile_x_offset_per: 60
      },
      {
        id: '1970s_1', // Unique id for annotation - order and # value don't matter - annotations are later sorted by start_date
        date: '1976-03-01', // Date marking start of annotation. Determines y trigger start position on deskop and order
        text: 'The 1976-1977 drought was short, so it is not considered one of the five major drought periods in the last 100 years. But this two-year drought caused agricultural losses and hydropower shortages across much of the western U.S.', // Narrative text
        quote: false,
        mobile_x_offset_per: 35
      },
      {
        id: '1970sQuote',
        date: '1978-03-01',
        text: '"There is no assurance that the next drought is not just beyond the horizon. We can be assured, however, that drought will return, and, considering the greater needs of that future time, its impact, unless prepared for, will be much greater." - <a href="https://cawaterlibrary.net/wp-content/uploads/2017/05/Drought-1976-77.pdf" target="_blank">Ronald B. Robie</a>, CA Department of Water Resources',
        quote: true,
        mobile_x_offset_per: 65
      },
      {
        id: '1980s_1',
        date: '1987-09-15',
        text: '1980s Drought: The 1980s drought affected areas from northern Minnesota to southern California. In the summer of 1988, streamflow in the Mississippi River was so low that barges could not go up and down the lower section of the river. That same summer, wildfires burned 36% of Yellowstone National Park, triggering the largest wildland fire-fighting effort in the U.S. up to that time.',
        mobile_x_offset_per: 27
      },
      {
        id: '1980s_2',
        date: '1992-08-10',
        text: 'A study in 1989 called for better climate data and predictions to help people prepare for and respond to drought (<a href="https://doi.org/10.1175/1520-0477(1989)070%3C1092:TDBAD%3E2.0.CO;2" target="_blank">Changnon 1989</a>). To this day, USGS scientists are working hard to address that need (<a href="https://www.usgs.gov/mission-areas/water-resources/science/drought-prediction-science" target="_blank">Drought Prediction Science Website</a>).',
        mobile_x_offset_per: 70
      },
      {
        id: 'turn_of_century_1',
        date: '2000-03-15',
        text: 'Turn-of-the-Century Drought: The turn-of-the-century drought was one of the worst drought periods to hit the southwestern U.S. in the last 1,200 years. Like previous droughts, low amounts of rain led to big drops in available water, but high temperatures drove the loss of soil moisture during this most recent drought (<a href="https://doi.org/10.1002/joc.7904" target="_blank">McCabe et al. 2022</a>).',
        mobile_x_offset_per: 25
      },
      {
        id: 'turn_of_century_2',
        date: '2011-07-01',
        text: 'The national-level drought period ended in 2015, but the turn-of-the-century drought in the southwestern U.S. has continued. The USGS is working with partners to understand this ongoing drought and to predict and communicate drought risk (<a href="https://www.usgs.gov/media/videos/image-week-lake-powell-and-megadrought" target="_blank">Video of drought at Lake Powell</a>).',
        mobile_x_offset_per: 85
      }
    ]
};