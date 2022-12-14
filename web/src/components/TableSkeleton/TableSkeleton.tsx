import {Skeleton} from "@mui/material";

export interface TableSkeletonProps {
  numberOfRows: number,
  numberOfColumns: number
}

export const TableSkeleton = (tableSkeletonProps: TableSkeletonProps): JSX.Element => {
  return (
    <>
      {
        Array.from({length: tableSkeletonProps.numberOfRows}, () => {
          return (
            <tr>
              {Array.from({length: tableSkeletonProps.numberOfColumns},() => {
                return (
                  <td>
                    <Skeleton/>
                  </td>
                )
              })}
            </tr>
          )

        })
      }
    </>
  )
}
