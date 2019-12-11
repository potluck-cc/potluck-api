export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  AWSURL: any,
  AWSTimestamp: any,
  AWSEmail: any,
  AWSPhone: any,
  AWSJSON: any,
};





export type Appointment = {
   __typename?: 'Appointment',
  id: Scalars['ID'],
  doctor: Doctor,
  patient: User,
  doctorId: Scalars['ID'],
  patientId: Scalars['ID'],
  createdAt: Scalars['AWSTimestamp'],
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  status: AppointmentStatus,
  date: Scalars['AWSTimestamp'],
};

export type AppointmentConnection = {
   __typename?: 'AppointmentConnection',
  items?: Maybe<Array<Maybe<Appointment>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export enum AppointmentStatus {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Cancelled = 'cancelled'
}






export type Conversation = {
   __typename?: 'Conversation',
  id: Scalars['ID'],
  createdAt?: Maybe<Scalars['AWSTimestamp']>,
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  patient: User,
  doctor: Doctor,
  patientId: Scalars['ID'],
  doctorId: Scalars['ID'],
  didDoctorRead?: Maybe<Scalars['Boolean']>,
  didPatientRead?: Maybe<Scalars['Boolean']>,
  messages?: Maybe<MessageConnection>,
};


export type ConversationMessagesArgs = {
  filter?: Maybe<TableMessageFilterInput>,
  sortDirection?: Maybe<SortDirection>,
  startFromTime?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};

export type ConversationConnection = {
   __typename?: 'ConversationConnection',
  items?: Maybe<Array<Maybe<Conversation>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export enum County {
  Atlantic = 'Atlantic',
  Bergen = 'Bergen',
  Burlington = 'Burlington',
  Camden = 'Camden',
  Capemay = 'Capemay',
  Cumberland = 'Cumberland',
  Essex = 'Essex',
  Gloucester = 'Gloucester',
  Hudson = 'Hudson',
  Hunterdon = 'Hunterdon',
  Mercer = 'Mercer',
  Middlesex = 'Middlesex',
  Monmouth = 'Monmouth',
  Morris = 'Morris',
  Ocean = 'Ocean',
  Passaic = 'Passaic',
  Salem = 'Salem',
  Somerset = 'Somerset',
  Sussex = 'Sussex',
  Union = 'Union',
  Warren = 'Warren'
}

export type CreateAppointmentInput = {
  doctor: Scalars['AWSJSON'],
  patient: Scalars['AWSJSON'],
  createdAt: Scalars['AWSTimestamp'],
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  status: AppointmentStatus,
  date?: Maybe<Scalars['AWSTimestamp']>,
  doctorId: Scalars['ID'],
  patientId: Scalars['ID'],
};

export type CreateConversationInput = {
  createdAt?: Maybe<Scalars['AWSTimestamp']>,
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  patientId: Scalars['ID'],
  doctorId: Scalars['ID'],
  patient: Scalars['AWSJSON'],
  doctor: Scalars['AWSJSON'],
  didDoctorRead?: Maybe<Scalars['Boolean']>,
  didPatientRead?: Maybe<Scalars['Boolean']>,
};

export type CreateDoctorInput = {
  id: Scalars['String'],
  address: Scalars['String'],
  county: Scalars['String'],
  hours?: Maybe<Scalars['AWSJSON']>,
  latitude: Scalars['String'],
  longitude: Scalars['String'],
  metadata: Scalars['String'],
  name: Scalars['String'],
  newPatients: Scalars['Boolean'],
  phone?: Maybe<Scalars['String']>,
  specialty: Scalars['String'],
  receiveChats?: Maybe<Scalars['Boolean']>,
  pricePerVisit?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['AWSURL']>,
  firstVisit?: Maybe<Scalars['String']>,
  followUp?: Maybe<Scalars['String']>,
  renewal?: Maybe<Scalars['String']>,
  bookingFee?: Maybe<Scalars['String']>,
  visitLength?: Maybe<Scalars['String']>,
  insuranceAccpeted?: Maybe<Scalars['Boolean']>,
  marketToken?: Maybe<Scalars['String']>,
  medToken?: Maybe<Scalars['String']>,
  stateId?: Maybe<Scalars['String']>,
  medCard?: Maybe<Scalars['String']>,
  marketWebToken?: Maybe<Scalars['String']>,
};

export type CreateInventoryItemInput = {
  storeId: Scalars['ID'],
  metadata: Scalars['String'],
  product: Scalars['String'],
  options?: Maybe<Scalars['AWSJSON']>,
  quantity?: Maybe<Scalars['Float']>,
  productType: ProductType,
  thc?: Maybe<Scalars['String']>,
  cbd?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['AWSURL']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  strainType?: Maybe<StrainType>,
  brand?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  isCannabisProduct?: Maybe<Scalars['Boolean']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  createdAt: Scalars['AWSTimestamp'],
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  location?: Maybe<Scalars['AWSJSON']>,
};

export type CreateMessageInput = {
  conversationId: Scalars['ID'],
  createdAt?: Maybe<Scalars['AWSTimestamp']>,
  sender?: Maybe<Scalars['String']>,
  isSent?: Maybe<Scalars['Boolean']>,
  text: Scalars['String'],
  patientId: Scalars['ID'],
  doctorId: Scalars['ID'],
};

export type CreateOrderInput = {
  store: Scalars['AWSJSON'],
  customer: Scalars['AWSJSON'],
  total: Scalars['Float'],
  expectedCompletionDate: Scalars['AWSTimestamp'],
  createdAt: Scalars['AWSTimestamp'],
  status: OrderStatus,
  products: Scalars['AWSJSON'],
  storeId: Scalars['ID'],
  customerId: Scalars['ID'],
  discount?: Maybe<Scalars['Float']>,
  subtotal: Scalars['Float'],
  code: Scalars['String'],
  tax?: Maybe<Scalars['Float']>,
  discountDisplayValue?: Maybe<Scalars['String']>,
  subtotalDisplayValue?: Maybe<Scalars['String']>,
  taxDisplayValue?: Maybe<Scalars['String']>,
  totalDisplayValue?: Maybe<Scalars['String']>,
  delivery?: Maybe<Scalars['Boolean']>,
  pickup: Scalars['Boolean'],
  pos?: Maybe<Scalars['Boolean']>,
  driver?: Maybe<Scalars['String']>,
};

export type CreateProductInput = {
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type CreateStoreInput = {
  companyId: Scalars['ID'],
  hours?: Maybe<Scalars['AWSJSON']>,
  name: Scalars['String'],
  phone?: Maybe<Scalars['AWSPhone']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  state: State,
  city: Scalars['String'],
  slug: Scalars['String'],
  link?: Maybe<Scalars['AWSURL']>,
  street: Scalars['String'],
  zip: Scalars['String'],
  logo?: Maybe<Scalars['AWSURL']>,
  storefrontImage?: Maybe<Scalars['AWSURL']>,
  pickup?: Maybe<Scalars['Boolean']>,
  delivery?: Maybe<Scalars['Boolean']>,
  maxDays?: Maybe<Scalars['Int']>,
  drivers?: Maybe<Scalars['AWSJSON']>,
  public?: Maybe<Scalars['Boolean']>,
  metadata: Scalars['String'],
};

export type CreateUserInput = {
  id: Scalars['ID'],
  confirmed?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
  patientID?: Maybe<Scalars['String']>,
  expiration?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['AWSEmail']>,
  phone?: Maybe<Scalars['AWSPhone']>,
  dob?: Maybe<Scalars['String']>,
  issued?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<State>,
  marketToken?: Maybe<Scalars['String']>,
  medToken?: Maybe<Scalars['String']>,
  stateId?: Maybe<Scalars['String']>,
  medCard?: Maybe<Scalars['String']>,
  marketWebToken?: Maybe<Scalars['String']>,
};

export enum Day {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday'
}

export type DeleteInventoryItemInput = {
  storeId: Scalars['ID'],
  id: Scalars['ID'],
};

export type DeleteProductInput = {
  id: Scalars['ID'],
  slug: Scalars['String'],
};

export type DeleteStoreInput = {
  companyId: Scalars['ID'],
  id: Scalars['ID'],
};

export type Doctor = {
   __typename?: 'Doctor',
  id: Scalars['ID'],
  address: Scalars['String'],
  county: County,
  metadata: Scalars['String'],
  hours?: Maybe<Array<Maybe<Scalars['String']>>>,
  latitude: Scalars['String'],
  longitude: Scalars['String'],
  name: Scalars['String'],
  newPatients?: Maybe<Scalars['Boolean']>,
  phone?: Maybe<Scalars['String']>,
  specialty: Scalars['String'],
  receiveChats?: Maybe<Scalars['Boolean']>,
  bio?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['AWSURL']>,
  insuranceAccpeted?: Maybe<Scalars['Boolean']>,
  firstVisit?: Maybe<Scalars['String']>,
  followUp?: Maybe<Scalars['String']>,
  renewal?: Maybe<Scalars['String']>,
  bookingFee?: Maybe<Scalars['String']>,
  visitLength?: Maybe<Scalars['String']>,
  marketToken?: Maybe<Scalars['String']>,
  medToken?: Maybe<Scalars['String']>,
  stateId?: Maybe<Scalars['String']>,
  medCard?: Maybe<Scalars['String']>,
  marketWebToken?: Maybe<Scalars['String']>,
};

export type DoctorConnection = {
   __typename?: 'DoctorConnection',
  items?: Maybe<Array<Maybe<Doctor>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type Geolocation = {
   __typename?: 'Geolocation',
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type InventoryItem = {
   __typename?: 'InventoryItem',
  storeId: Scalars['ID'],
  id: Scalars['ID'],
  metadata: Scalars['String'],
  product: Product,
  productType: ProductType,
  image?: Maybe<Scalars['AWSURL']>,
  quantity?: Maybe<Scalars['Float']>,
  thc?: Maybe<Scalars['String']>,
  cbd?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  strainType?: Maybe<StrainType>,
  brand?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  options?: Maybe<Array<Maybe<Option>>>,
  isCannabisProduct?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Geolocation>,
  createdAt?: Maybe<Scalars['AWSTimestamp']>,
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
};

export type InventoryItemConnection = {
   __typename?: 'InventoryItemConnection',
  items?: Maybe<Array<Maybe<InventoryItem>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type Message = {
   __typename?: 'Message',
  id: Scalars['ID'],
  text: Scalars['String'],
  conversationId: Scalars['ID'],
  createdAt?: Maybe<Scalars['AWSTimestamp']>,
  isSent?: Maybe<Scalars['Boolean']>,
  sender?: Maybe<Scalars['String']>,
};

export type MessageConnection = {
   __typename?: 'MessageConnection',
  items?: Maybe<Array<Maybe<Message>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createProduct?: Maybe<Product>,
  createStore?: Maybe<Store>,
  updateStore?: Maybe<Store>,
  deleteStore?: Maybe<Store>,
  createInventoryItem?: Maybe<InventoryItem>,
  updateInventoryItem?: Maybe<InventoryItem>,
  deleteInventoryItem?: Maybe<InventoryItem>,
  updateOrder?: Maybe<Order>,
  createOrder?: Maybe<Order>,
  updateStock?: Maybe<InventoryItem>,
  createDoctor?: Maybe<Doctor>,
  updateDoctor?: Maybe<Doctor>,
  createUser?: Maybe<User>,
  updateUser?: Maybe<User>,
  createAppointment?: Maybe<Appointment>,
  updateAppointment?: Maybe<Appointment>,
  createMessage?: Maybe<Message>,
  createConversation?: Maybe<Conversation>,
  updateConversation?: Maybe<Conversation>,
};


export type MutationCreateProductArgs = {
  input: CreateProductInput
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput
};


export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput
};


export type MutationDeleteStoreArgs = {
  input?: Maybe<DeleteStoreInput>
};


export type MutationCreateInventoryItemArgs = {
  input: CreateInventoryItemInput
};


export type MutationUpdateInventoryItemArgs = {
  input: UpdateInventoryItemInput
};


export type MutationDeleteInventoryItemArgs = {
  input: DeleteInventoryItemInput
};


export type MutationUpdateOrderArgs = {
  input?: Maybe<UpdateOrderInput>
};


export type MutationCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>
};


export type MutationUpdateStockArgs = {
  input: UpdateStockInput
};


export type MutationCreateDoctorArgs = {
  input: CreateDoctorInput
};


export type MutationUpdateDoctorArgs = {
  input: UpdateDoctorInput
};


export type MutationCreateUserArgs = {
  input: CreateUserInput
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


export type MutationCreateAppointmentArgs = {
  input?: Maybe<CreateAppointmentInput>
};


export type MutationUpdateAppointmentArgs = {
  input?: Maybe<UpdateAppointmentInput>
};


export type MutationCreateMessageArgs = {
  input?: Maybe<CreateMessageInput>
};


export type MutationCreateConversationArgs = {
  input?: Maybe<CreateConversationInput>
};


export type MutationUpdateConversationArgs = {
  input?: Maybe<UpdateConversationInput>
};

export type Option = {
   __typename?: 'Option',
  amount?: Maybe<Scalars['Float']>,
  weight?: Maybe<WeightOptions>,
};

export type Order = {
   __typename?: 'Order',
  id: Scalars['ID'],
  store: Store,
  customer: User,
  expectedCompletionDate: Scalars['AWSTimestamp'],
  createdAt: Scalars['AWSTimestamp'],
  status: OrderStatus,
  products: Array<Maybe<OrderItem>>,
  storeId: Scalars['ID'],
  customerId: Scalars['ID'],
  discount?: Maybe<Scalars['Float']>,
  subtotal: Scalars['Float'],
  total: Scalars['Float'],
  tax?: Maybe<Scalars['Float']>,
  discountDisplayValue?: Maybe<Scalars['String']>,
  subtotalDisplayValue: Scalars['String'],
  taxDisplayValue?: Maybe<Scalars['String']>,
  totalDisplayValue: Scalars['String'],
  delivery?: Maybe<Scalars['Boolean']>,
  pickup: Scalars['Boolean'],
  pos?: Maybe<Scalars['Boolean']>,
  code: Scalars['String'],
};

export type OrderConnection = {
   __typename?: 'OrderConnection',
  items?: Maybe<Array<Maybe<Order>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type OrderItem = {
   __typename?: 'OrderItem',
  item: InventoryItem,
  quantity: Scalars['Int'],
  option: Option,
  requestedGrams: Scalars['Int'],
};

export enum OrderStatus {
  New = 'new',
  Accepted = 'accepted',
  Rejected = 'rejected'
}

export type Product = {
   __typename?: 'Product',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type ProductConnection = {
   __typename?: 'ProductConnection',
  items?: Maybe<Array<Maybe<Product>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export enum ProductType {
  Flower = 'Flower',
  Concentrate = 'Concentrate',
  Edible = 'Edible',
  Topical = 'Topical',
  PreRolls = 'PreRolls'
}

export type Query = {
   __typename?: 'Query',
  getProduct?: Maybe<Product>,
  getStore?: Maybe<Store>,
  getCompanyStores?: Maybe<StoreConnection>,
  getStoreInventory?: Maybe<InventoryItemConnection>,
  getOrdersByStore?: Maybe<OrderConnection>,
  getDoctor?: Maybe<Doctor>,
  getUser?: Maybe<User>,
  listStores?: Maybe<StoreConnection>,
  getOrdersByCustomer?: Maybe<OrderConnection>,
  getStoreByMetadata?: Maybe<Store>,
  getStoreInventoryWithFilters?: Maybe<InventoryItemConnection>,
  validateCart?: Maybe<Array<Maybe<InventoryItem>>>,
  listDoctors?: Maybe<DoctorConnection>,
  getDoctorsByCounty?: Maybe<DoctorConnection>,
  getAppointment?: Maybe<Appointment>,
  getAppointmentsByPatient?: Maybe<AppointmentConnection>,
  getAppointmentsByDoctor?: Maybe<AppointmentConnection>,
  getConversation?: Maybe<Conversation>,
  getConversationsByDoctor?: Maybe<ConversationConnection>,
  getConversationsByPatient?: Maybe<ConversationConnection>,
  getMessagesFromAConversation?: Maybe<MessageConnection>,
};


export type QueryGetProductArgs = {
  slug: Scalars['String']
};


export type QueryGetStoreArgs = {
  id: Scalars['ID'],
  companyId: Scalars['ID']
};


export type QueryGetCompanyStoresArgs = {
  companyId: Scalars['ID']
};


export type QueryGetStoreInventoryArgs = {
  storeId: Scalars['ID'],
  nextToken?: Maybe<Scalars['String']>,
  filter?: Maybe<TableInventoryItemFilterInput>
};


export type QueryGetOrdersByStoreArgs = {
  storeId: Scalars['ID']
};


export type QueryGetDoctorArgs = {
  id: Scalars['ID']
};


export type QueryGetUserArgs = {
  id: Scalars['ID']
};


export type QueryListStoresArgs = {
  filter?: Maybe<TableStoreFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};


export type QueryGetOrdersByCustomerArgs = {
  customerId: Scalars['ID']
};


export type QueryGetStoreByMetadataArgs = {
  metadata: Scalars['String']
};


export type QueryGetStoreInventoryWithFiltersArgs = {
  storeId: Scalars['ID'],
  metadata?: Maybe<Scalars['String']>,
  nextToken?: Maybe<Scalars['String']>,
  filter?: Maybe<TableInventoryItemFilterInput>
};


export type QueryValidateCartArgs = {
  cart: Scalars['AWSJSON'],
  storeId: Scalars['ID']
};


export type QueryListDoctorsArgs = {
  filter?: Maybe<TableDoctorFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};


export type QueryGetDoctorsByCountyArgs = {
  metadata: Scalars['String'],
  nextToken?: Maybe<Scalars['String']>
};


export type QueryGetAppointmentArgs = {
  id: Scalars['ID']
};


export type QueryGetAppointmentsByPatientArgs = {
  patientId: Scalars['ID'],
  filter?: Maybe<TableAppointmentFilterInput>
};


export type QueryGetAppointmentsByDoctorArgs = {
  doctorId: Scalars['ID'],
  from: Scalars['AWSTimestamp'],
  to: Scalars['AWSTimestamp'],
  filter?: Maybe<TableAppointmentFilterInput>
};


export type QueryGetConversationArgs = {
  id: Scalars['ID'],
  filter?: Maybe<TableConversationFilterInput>
};


export type QueryGetConversationsByDoctorArgs = {
  doctorId: Scalars['ID'],
  filter?: Maybe<TableConversationFilterInput>
};


export type QueryGetConversationsByPatientArgs = {
  patientId: Scalars['ID'],
  filter?: Maybe<TableConversationFilterInput>
};


export type QueryGetMessagesFromAConversationArgs = {
  conversationId: Scalars['ID'],
  filter?: Maybe<TableMessageFilterInput>,
  sortDirection?: Maybe<SortDirection>,
  startFromTime?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};

export type ReviewProductInput = {
  id: Scalars['ID'],
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum State {
  Nj = 'NJ'
}

export type Store = {
   __typename?: 'Store',
  id: Scalars['ID'],
  companyId: Scalars['ID'],
  hours?: Maybe<Array<Maybe<Timeblock>>>,
  inventory?: Maybe<InventoryItemConnection>,
  name: Scalars['String'],
  phone?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  state: State,
  city: Scalars['String'],
  link?: Maybe<Scalars['AWSURL']>,
  street: Scalars['String'],
  zip: Scalars['String'],
  logo?: Maybe<Scalars['AWSURL']>,
  storefrontImage?: Maybe<Scalars['AWSURL']>,
  pickup?: Maybe<Scalars['Boolean']>,
  delivery?: Maybe<Scalars['Boolean']>,
  maxDays?: Maybe<Scalars['Int']>,
  drivers?: Maybe<StoreDrivers>,
  public?: Maybe<Scalars['Boolean']>,
  slug: Scalars['String'],
  metadata: Scalars['String'],
};

export type StoreConnection = {
   __typename?: 'StoreConnection',
  items?: Maybe<Array<Maybe<Store>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type StoreDrivers = {
   __typename?: 'StoreDrivers',
  id?: Maybe<Scalars['ID']>,
  firstname?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
};

export enum StrainType {
  Cbd = 'CBD',
  Highcbd = 'HIGHCBD',
  Hybrid = 'Hybrid',
  Indica = 'Indica',
  Sativa = 'Sativa'
}

export type Subscription = {
   __typename?: 'Subscription',
  onCreateOrder?: Maybe<Order>,
  onUpdateInventoryItemStock?: Maybe<InventoryItem>,
  onUpdateConversation?: Maybe<Conversation>,
  onCreateMessage?: Maybe<Message>,
};


export type SubscriptionOnCreateOrderArgs = {
  storeId: Scalars['ID'],
  status?: Maybe<OrderStatus>
};


export type SubscriptionOnUpdateInventoryItemStockArgs = {
  id: Scalars['ID']
};


export type SubscriptionOnUpdateConversationArgs = {
  patientId?: Maybe<Scalars['ID']>,
  doctorId?: Maybe<Scalars['ID']>
};


export type SubscriptionOnCreateMessageArgs = {
  conversationId?: Maybe<Scalars['ID']>
};

export type TableAppointmentFilterInput = {
  doctor?: Maybe<TableStringFilterInput>,
  patient?: Maybe<TableStringFilterInput>,
  status?: Maybe<TableStringFilterInput>,
  date?: Maybe<TableIntFilterInput>,
  doctorId?: Maybe<TableStringFilterInput>,
  patientID?: Maybe<TableStringFilterInput>,
};

export type TableBooleanFilterInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
};

export type TableConversationFilterInput = {
  id?: Maybe<TableIdFilterInput>,
  doctorId?: Maybe<TableIdFilterInput>,
  patientId?: Maybe<TableIdFilterInput>,
};

export type TableDoctorFilterInput = {
  address?: Maybe<TableStringFilterInput>,
  hours?: Maybe<TableStringFilterInput>,
  name?: Maybe<TableStringFilterInput>,
  newPatients?: Maybe<TableBooleanFilterInput>,
  county?: Maybe<TableStringFilterInput>,
};

export type TableFloatFilterInput = {
  between?: Maybe<Array<Maybe<Scalars['Float']>>>,
  contains?: Maybe<Scalars['Float']>,
  eq?: Maybe<Scalars['Float']>,
  ge?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  le?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  notContains?: Maybe<Scalars['Float']>,
};

export type TableIdFilterInput = {
  beginsWith?: Maybe<Scalars['ID']>,
  between?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contains?: Maybe<Scalars['ID']>,
  eq?: Maybe<Scalars['ID']>,
  ge?: Maybe<Scalars['ID']>,
  gt?: Maybe<Scalars['ID']>,
  le?: Maybe<Scalars['ID']>,
  lt?: Maybe<Scalars['ID']>,
  ne?: Maybe<Scalars['ID']>,
  notContains?: Maybe<Scalars['ID']>,
};

export type TableIntFilterInput = {
  between?: Maybe<Array<Maybe<Scalars['Int']>>>,
  contains?: Maybe<Scalars['Int']>,
  eq?: Maybe<Scalars['Int']>,
  ge?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  le?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  notContains?: Maybe<Scalars['Int']>,
};

export type TableInventoryItemFilterInput = {
  id?: Maybe<TableIdFilterInput>,
  product?: Maybe<TableStringFilterInput>,
  quantity?: Maybe<TableFloatFilterInput>,
  productType?: Maybe<TableStringFilterInput>,
  isCannabisProduct?: Maybe<TableBooleanFilterInput>,
};

export type TableMessageFilterInput = {
  conversationId?: Maybe<TableIdFilterInput>,
  createdAt?: Maybe<TableIntFilterInput>,
  sender?: Maybe<TableStringFilterInput>,
  isSent?: Maybe<TableBooleanFilterInput>,
  text?: Maybe<TableStringFilterInput>,
};

export type TableOrderFilterInput = {
  id?: Maybe<TableIdFilterInput>,
  date?: Maybe<TableStringFilterInput>,
  status?: Maybe<TableStringFilterInput>,
  products?: Maybe<TableStringFilterInput>,
  customer?: Maybe<TableStringFilterInput>,
  store?: Maybe<TableStringFilterInput>,
  delivery?: Maybe<TableBooleanFilterInput>,
  code?: Maybe<TableStringFilterInput>,
};

export type TableProductFilterInput = {
  description?: Maybe<TableStringFilterInput>,
  id?: Maybe<TableIdFilterInput>,
  name?: Maybe<TableStringFilterInput>,
  slug?: Maybe<TableStringFilterInput>,
};

export type TableStoreFilterInput = {
  city?: Maybe<TableStringFilterInput>,
  id?: Maybe<TableIdFilterInput>,
  inventory?: Maybe<TableStringFilterInput>,
  name?: Maybe<TableStringFilterInput>,
  zip?: Maybe<TableStringFilterInput>,
  pickup?: Maybe<TableBooleanFilterInput>,
  delivery?: Maybe<TableBooleanFilterInput>,
  public?: Maybe<TableBooleanFilterInput>,
};

export type TableStringFilterInput = {
  beginsWith?: Maybe<Scalars['String']>,
  between?: Maybe<Array<Maybe<Scalars['String']>>>,
  contains?: Maybe<Scalars['String']>,
  eq?: Maybe<Scalars['String']>,
  ge?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  le?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  notContains?: Maybe<Scalars['String']>,
};

export type Timeblock = {
   __typename?: 'timeblock',
  day?: Maybe<Day>,
  startTime?: Maybe<Scalars['String']>,
  endTime?: Maybe<Scalars['String']>,
};

export type UpdateAppointmentInput = {
  id: Scalars['ID'],
  status?: Maybe<AppointmentStatus>,
};

export type UpdateConversationInput = {
  id: Scalars['ID'],
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  didDoctorRead?: Maybe<Scalars['Boolean']>,
  didPatientRead?: Maybe<Scalars['Boolean']>,
};

export type UpdateDoctorInput = {
  id: Scalars['ID'],
  address?: Maybe<Scalars['String']>,
  hours?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  receiveChats?: Maybe<Scalars['Boolean']>,
  bio?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['AWSURL']>,
  firstVisit?: Maybe<Scalars['String']>,
  followUp?: Maybe<Scalars['String']>,
  renewal?: Maybe<Scalars['String']>,
  bookingFee?: Maybe<Scalars['String']>,
  visitLength?: Maybe<Scalars['String']>,
  insuranceAccpeted?: Maybe<Scalars['Boolean']>,
  metadata?: Maybe<Scalars['String']>,
  marketToken?: Maybe<Scalars['String']>,
  medToken?: Maybe<Scalars['String']>,
  stateId?: Maybe<Scalars['String']>,
  medCard?: Maybe<Scalars['String']>,
  marketWebToken?: Maybe<Scalars['String']>,
};

export type UpdateInventoryItemInput = {
  id: Scalars['ID'],
  storeId: Scalars['ID'],
  thc?: Maybe<Scalars['String']>,
  cbd?: Maybe<Scalars['String']>,
  options?: Maybe<Scalars['AWSJSON']>,
  productType?: Maybe<ProductType>,
  quantity?: Maybe<Scalars['Float']>,
  product?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['AWSURL']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  strainType?: Maybe<StrainType>,
  brand?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  isCannabisProduct?: Maybe<Scalars['Boolean']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  updatedAt?: Maybe<Scalars['AWSTimestamp']>,
  location?: Maybe<Scalars['AWSJSON']>,
};

export type UpdateOrderInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt: Scalars['AWSTimestamp'],
  status?: Maybe<OrderStatus>,
  customerId: Scalars['ID'],
  code?: Maybe<Scalars['String']>,
};

export type UpdateProductInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
};

export type UpdateStockInput = {
  storeId: Scalars['ID'],
  id: Scalars['ID'],
  quantity?: Maybe<Scalars['Float']>,
};

export type UpdateStoreInput = {
  companyId: Scalars['ID'],
  id: Scalars['ID'],
  address?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['AWSJSON']>,
  name?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  state?: Maybe<State>,
  city?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['AWSURL']>,
  zip?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['AWSPhone']>,
  logo?: Maybe<Scalars['AWSURL']>,
  storefrontImage?: Maybe<Scalars['AWSURL']>,
  pickup?: Maybe<Scalars['Boolean']>,
  delivery?: Maybe<Scalars['Boolean']>,
  maxDays?: Maybe<Scalars['Int']>,
  drivers?: Maybe<Scalars['AWSJSON']>,
  public?: Maybe<Scalars['Boolean']>,
  metadata?: Maybe<Scalars['String']>,
};

export type UpdateUserInput = {
  id: Scalars['ID'],
  confirmed?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
  patientID?: Maybe<Scalars['String']>,
  expiration?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['AWSEmail']>,
  phone?: Maybe<Scalars['AWSPhone']>,
  dob?: Maybe<Scalars['String']>,
  issued?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<State>,
  marketToken?: Maybe<Scalars['String']>,
  medToken?: Maybe<Scalars['String']>,
  stateId?: Maybe<Scalars['String']>,
  medCard?: Maybe<Scalars['String']>,
  marketWebToken?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  confirmed?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<State>,
  patientID?: Maybe<Scalars['String']>,
  expiration?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['AWSEmail']>,
  phone?: Maybe<Scalars['AWSPhone']>,
  marketToken?: Maybe<Scalars['String']>,
  medToken?: Maybe<Scalars['String']>,
  stateId?: Maybe<Scalars['String']>,
  medCard?: Maybe<Scalars['String']>,
  marketWebToken?: Maybe<Scalars['String']>,
};

export enum WeightOptions {
  Gram = 'gram',
  Eighth = 'eighth',
  Quarter = 'quarter',
  Half = 'half',
  Ounce = 'ounce'
}
