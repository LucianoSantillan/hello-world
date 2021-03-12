const fs = require('fs');
const { rootPath } = require('./constants');
const { replaceAll, lowerFirstLetter } = require('./utils/StringUtils');

function createList(entityNameInPlural, entityName) {
    let contenido = `import { useState, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import { Button, DynamicTable, DynamicTableColumn, NoResultsMessage } from 'subFramework'
import Icon from '@mdi/react'
import {
  mdiArrowDown,
  mdiArrowUp,
  mdiChevronLeft,
  mdiChevronRight,
  mdiFileEditOutline,
  mdiPlusThick,
  mdiTrashCanOutline,
} from '@mdi/js'
import MetaTitle from 'presentation/MetaTitle'
import MainTitle from 'presentation/MainTitle'
import { Link } from 'react-router-dom'
import { EDIT_##entityName_upper, NEW_##entityName_upper } from 'routing/paths'
import ##entityName_capitalized_pluralStore from './##entityName_capitalized_pluralStore'
import styles from './##entityName_lower_plural.module.scss'
import ##entityName_capitalized_pluralFilters from './##entityName_capitalized_pluralFilters'

const ##entityName_capitalized_plural = () => {
  const { t } = useTranslation()
  const [##entityName_lower_pluralStore] = useState(new ##entityName_capitalized_pluralStore())

  const handlePageChange = useCallback((newPage) => {
    ##entityName_lower_pluralStore.changePage(newPage)
  }, [])

  const handleSortChange = useCallback((sortField) => {
    ##entityName_lower_pluralStore.changeSort(sortField)
  }, [])

  const handleDelete##entityName_capitalized_singular = useCallback((e) => {
    // eslint-disable-next-line
    if (confirm(t('confirmDelete##entityName_capitalized_singular'))) {
      ##entityName_lower_pluralStore
        .delete##entityName_capitalized_singularItem(e.currentTarget.value)
        .then(() => ##entityName_lower_pluralStore.load##entityName_capitalized_plural())
        .catch(() => {})
    }
  }, [])

  useEffect(() => {
    ##entityName_lower_pluralStore.load##entityName_capitalized_plural()
  }, [])

  return (
    <div>
      <MetaTitle title={t('##entityName_lower_plural')} />
      <MainTitle
        title={t('##entityName_lower_plural')}
        button={
          <Button
            icon={<Icon path={mdiPlusThick} />}
            label={t('create##entityName_capitalized_singular')}
            to={NEW_##entityName_upper}
            as={Link}
          />
        }
      />
      <##entityName_capitalized_pluralFilters ##entityName_lower_pluralStore={##entityName_lower_pluralStore} />
      <DynamicTable
        isLoading={##entityName_lower_pluralStore.isLoading}
        paginator={##entityName_lower_pluralStore.paginator}
        data={##entityName_lower_pluralStore.##entityName_lower_plural}
        sorter={##entityName_lower_pluralStore.sorter}
        handlePageChange={handlePageChange}
        handleSortChange={handleSortChange}
        sortDescendingIcon={<Icon path={mdiArrowDown} size={0.6} />}
        sortAscendingIcon={<Icon path={mdiArrowUp} size={0.6} />}
        paginatorNextIcon={
          <div className={styles.paginatorNext}>
            {t('next')}
            <Icon path={mdiChevronRight} size={0.9} />
          </div>
        }
        paginatorPrevIcon={<Icon path={mdiChevronLeft} size={0.9} />}
        columns={[
          new DynamicTableColumn(t('name'), 'name', '1fr'),
          new DynamicTableColumn(t('actions'), 'actions', '100px', ({ id }) => (
            <div className={styles.actionsContainer}>
              <Button
                value={id}
                icon={<Icon path={mdiTrashCanOutline} />}
                onClick={handleDelete##entityName_capitalized_singular}
                circle
                smallest
              />
              <Button
                to={EDIT_##entityName_upper.replace(':id', id)}
                icon={<Icon path={mdiFileEditOutline} />}
                value={id}
                as={Link}
                smallest
                circle
              />
            </div>
          )),
        ]}
        noResultsMessage={<NoResultsMessage message={t('noResultsMessage')} />}
      />
    </div>
  )
}

export default observer(##entityName_capitalized_plural)
`;
    contenido = replaceAll(contenido, "##entityName_upper", entityName.toUpperCase())
    contenido = replaceAll(contenido, '##entityName_capitalized_singular', entityName)
    contenido = replaceAll(contenido, '##entityName_lower_plural', lowerFirstLetter(entityNameInPlural))
    contenido = replaceAll(contenido, '##entityName_capitalized_plural', entityNameInPlural)
    fs.mkdirSync(`${rootPath}/${entityNameInPlural}`)
    fs.writeFileSync(`${rootPath}/${entityNameInPlural}/${entityNameInPlural}.jsx`, contenido)
}

exports.createList = createList