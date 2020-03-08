import ve from './ve/en'
import crm from './crm/en'
import pa from './pa/en'
import org from './org/en'
import se from './se/en'
import sys from './sys/en'

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
