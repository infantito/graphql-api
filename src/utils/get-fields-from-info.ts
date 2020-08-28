import { GraphQLResolveInfo } from 'graphql'
import { FieldsProjection, fieldsProjection } from 'graphql-fields-list'

const getFieldsFromInfo = (info: GraphQLResolveInfo): FieldsProjection => {
  const fields = fieldsProjection(info)

  return fields
}

export default getFieldsFromInfo
