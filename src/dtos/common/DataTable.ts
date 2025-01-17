// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type DataTableDto<T> = { data: Array<T>, page: bigint, page_size: bigint, total_pages: bigint, total_records: bigint, };

export type DataTableRequestDto = { page: bigint, page_size: bigint, sort_by: string | null, };
