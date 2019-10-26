export const state = () => ({
  list: [
    {
      id: 1,
      name: '55 Moorgate',
      images: ['55-moorgate-1.jpg', '55-moorgate-2.jpg'],
      description:
        'The central London office refurbishment involved a two-storey extension to an existing six storey RC framed building. The frame consisted of concrete waffle slabs on a 7.5m column grid. To facilitate the extension, existing columns and foundations were strengthened to cater for the increased superstructure. Existing reinforced concrete lift cores were relocated to facilitate architectural and space planning requirements. One of the major design items involved removing an existing reinforced concrete column supporting six storeys at ground floor level to create an open plan foyer. This was achieved by installing a structural steel transfer structures at first and lower ground floors.',
      path: '/projects/55-moorgate'
    },
    {
      id: 2,
      name: 'Kings College – Chetwynd Court',
      images: ['kings-college-1.jpg', 'kings-college-2.jpg', 'kings-college-3.jpg', 'kings-college-4.jpg', 'kings-college-5.jpg', 'kings-college-6.jpg'],
      description:
        'The refurbishment scheme involved the design and analysis of a new multiuse lecture hall at Kings College, Cambridge.  The lecture hall comprised of three below ground levels with an above ground glass pavilion. The below ground portion of the development consisted of three main elements: auditorium, foyer and social space. The three storey below ground auditorium is 7.85m in height with a mezzanine to provide additional floor area. Site constraints were critical for this project as the new basement structure was located below an existing courtyard bounded on all sides by existing buildings. The above ground portion of the development consists of a new structural steel and glass framed glass pavilion that will be used as social space for students and pre and post-function space for academic and conference events.',
      path: '/projects/kings-college'
    },
    {
      id: 3,
      name: 'Cambridge House',
      images: ['cambridge-house-1.png', 'cambridge-house-2.png', 'cambridge-house-3.jpg', 'cambridge-house-4.jpg', 'cambridge-house-5.jpg'],
      description:
        'Cambridge House involved forming a double height lecture theatre and adding two stories to an existing steel and masonry framed building. The structural form of the extension was steel framed cross laminated timber (CLT) construction. To facilitate the extension, a new reinforced concrete lift core was introduced to provide stability to the building. In addition, column and foundation strengthening at lower ground floor was undertaken to support the additional loading from the superstructure.',
      path: '/projects/cambridge-house'
    },
    {
      id: 4,
      name: 'Bridge Houe Homerton',
      images: ['bridge-house-1.jpg', 'bridge-house-2.jpg', 'bridge-house-3.jpg', 'bridge-house-4.jpg', 'bridge-house-5.jpg', 'bridge-house-6.jpg', 'bridge-house-7.jpg'],
      description:
        'The project involved the demolition of an existing residential building and the design of three RC framed residential buildings as part of London’s affordable housing scheme. Block A (main building) included a basement formed inside a contiguous pile wall. Stability for the buildings were typically provided from structural cores however Block A required additional stability elements due to significant torsional effects.',
      path: '/projects/bridge-house-homerton'
    },
    {
      id: 5,
      name: "St. Bartholomew's Hospital",
      images: ['st-bart-hospital-1.jpg', 'st-bart-hospital-2.jpg', 'st-bart-hospital-3.jpg', 'st-bart-hospital-4.jpg', 'st-bart-hospital-5.jpg'],
      description:
        'APC Engineering provided structural engineering services for the refurbishment works to the residential staff quarters building and Old Pathology buildings. The works were part of the £36M St Bartholomew’s Hospital redevelopment. The structural works included design of a new reinforced concrete basement slab, new steelwork for the installation of new bed and service lifts, new steel portal frame to the new main entrance, removal of existing chimney stacks and installation of new service riser openings. The most challenging aspect of the project was interfacing 21st century structural elements with the existing structure constructed in 1907.',
      path: '/projects/st-bart-hospital'
    },
    {
      id: 6,
      name: 'Gatwick Airport - International Departure Lounge',
      images: ['gatwick-airport-idl.jpg'],
      description:
        'Structural engineering services were provided for the design of a new composite concrete and structural steel mezzanine floor. The purpose of the new mezzanine floor was to provide additional retail space for the international departure lounge. The structural form consisted of metal deck concrete slabs supported on new structural steel beams spanning 29m supported on the existing structure. Due to Architectural constraints in having opening plan retail areas, the most challenging aspect of the project was adding 29m of additional floor space without introducing columns to support the new mezzanine floor.',
      path: '/projects/gatwick-airport-idl'
    },
    {
      id: 7,
      name: 'Tufnell Park',
      images: ['tufnell-park-1.jpg', 'tufnell-park-2.jpg', 'tufnell-park-3.jpg', 'tufnell-park-4.jpg', 'tufnell-park-5.jpg', 'tufnell-park-6.jpg'],
      description:
        'The new build consisted of a mixed-use development in Holloway, London, which comprised of two buildings, six and seven storeys respectively with combined retail space on the lower floors, and residential above. A great deal of time was spent with the design team, and in particular the Architect, aligning apartment layouts to ensure load paths were transmitted from floor to floor. This eliminated the need of transfer structures and facilitated the use of a Metframe option, which significantly increased the speed of construction and reduced the weight of the structure. The reduced weight meant the foundations could be reduced in size which resulted in significant construction costs.',
      path: '/projects/tufnell-park'
    },
    {
      id: 8,
      name: 'Pembridge Place',
      images: ['pembridge-place-1.jpg', 'pembridge-place-2.jpg', 'pembridge-place-3.jpg', 'pembridge-place-4.jpg'],
      description:
        'Pembridge Place, London was a residential refurbishment which involved a new double storey basement constructed below the existing 3 storey structure. The project involved retaining the existing façade and flank walls during and post construction. All internal walls were demolished to cater for a new three storey superstructure which restrained the existing façade in the permanent condition. The sites boundary conditions were challenging and required drawing on our vast construction experience to propose structural solutions that were carefully co-ordinated.',
      path: '/projects/pembridge-place'
    }
  ]
})

// Getters
export const getters = {
  projects: state => state.list
}
