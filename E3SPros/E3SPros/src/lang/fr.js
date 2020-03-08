import ve from './ve/fr'
import crm from './crm/fr'
import pa from './pa/fr'
import org from './org/fr'
import se from './se/fr'
import sys from './sys/fr'

export default {
  ve: {
    ...ve.ve
  },
  crm: {
    ...crm.crm
  },
  pa: {
    ...pa.pa
  },
  org: {
    ...org.org
  },
  se: {
    ...se.se
  },
  ...sys
}
