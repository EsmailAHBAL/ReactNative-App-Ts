export type MoodType = {emoji :string,description :string}
export type MoodTypeWithSTM = {mood :MoodType,timestamp:number}
type FirstItem < T extends readonly any []> = T extends [] ? never :T[0]  // ✔ 
type Exclude <T ,U> = T extends U ? never :T  
type Includes<T extends readonly any [],U> = true
type Split <S extends string,SP extends string> =
 S extends `${infer F}${SP}${infer R}` ?[F,...Split<R,SP>]:S extends "" ? [] : string extends S ? string [] :[S]

type UnionOfString <S extends String> = S extends `${infer F}${infer R}` ? F | UnionOfString<R> :never
 type iSTuple <T> = T extends readonly any[]
 ? [...T,any]['length'] extends T['length'] 
        ? 'E' 
        : true 
 :"Not even Array ❌ "  
type testing =iSTuple<number[]>
