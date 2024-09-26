use scrypto::prelude::*;

#[derive(ScryptoSbor, Clone)]
pub struct User {
    user_id: u32,
    user_type: String,
    user_wallet_address: ComponentAddress,
    user_expense: Decimal,
    user_paid_state: bool,
    group_id: Option<u32>,
}

#[derive(ScryptoSbor, Clone)]
pub struct Group {
    group_id: u32,
    group_type: String,
    group_address: String,
    member_list: Vec<ComponentAddress>,
}

#[derive(ScryptoSbor, Clone)]
pub struct Expense {
    expense_id: u32,
    group_id: u32,
    member_id: ComponentAddress,
    amount: Decimal,
}

#[derive(ScryptoSbor, Clone)]
pub struct Income {
    income_id: u32,
    group_id: u32,
    member_id: ComponentAddress,
    amount: Decimal,
}

#[blueprint]
mod dapp_manager {
    struct DappManager {
        users: HashMap<u32, User>,
        groups: HashMap<u32, Group>,
        expenses: HashMap<u32, Expense>,
        incomes: HashMap<u32, Income>,
        next_user_id: u32,
        next_group_id: u32,
        next_expense_id: u32,
        next_income_id: u32,
    }

    impl DappManager {
        pub fn instantiate_dapp_manager() -> Global<DappManager> {
            Self {
                users: HashMap::new(),
                groups: HashMap::new(),
                expenses: HashMap::new(),
                incomes: HashMap::new(),
                next_user_id: 1,
                next_group_id: 1,
                next_expense_id: 1,
                next_income_id: 1,
            }
            .instantiate()
            .prepare_to_globalize(OwnerRole::None)
            .globalize()
        }

        pub fn create_user(&mut self, user_type: String, user_wallet_address: ComponentAddress) -> u32 {
            let user_id = self.next_user_id;
            self.next_user_id += 1;

            let user = User {
                user_id,
                user_type,
                user_wallet_address,
                user_expense: Decimal::zero(),
                user_paid_state: false,
                group_id: None,
            };

            self.users.insert(user_id, user);
            user_id
        }

        pub fn create_group(&mut self, group_type: String, group_address: String, member_list: Vec<ComponentAddress>) -> u32 {
            let group_id = self.next_group_id;
            self.next_group_id += 1;

            let group = Group {
                group_id,
                group_type,
                group_address,
                member_list,
            };

            self.groups.insert(group_id, group);
            group_id
        }

        pub fn add_expense(&mut self, group_id: u32, member_id: ComponentAddress, amount: Decimal) -> u32 {
            let expense_id = self.next_expense_id;
            self.next_expense_id += 1;

            let expense = Expense {
                expense_id,
                group_id,
                member_id,
                amount,
            };

            self.expenses.insert(expense_id, expense);
            expense_id
        }

        pub fn add_income(&mut self, group_id: u32, member_id: ComponentAddress, amount: Decimal) -> u32 {
            let income_id = self.next_income_id;
            self.next_income_id += 1;

            let income = Income {
                income_id,
                group_id,
                member_id,
                amount,
            };

            self.incomes.insert(income_id, income);
            income_id
        }

        pub fn get_user(&self, user_id: u32) -> Option<User> {
            self.users.get(&user_id).cloned()
        }

        pub fn get_group(&self, group_id: u32) -> Option<Group> {
            self.groups.get(&group_id).cloned()
        }

        pub fn get_expense(&self, expense_id: u32) -> Option<Expense> {
            self.expenses.get(&expense_id).cloned()
        }

        pub fn get_income(&self, income_id: u32) -> Option<Income> {
            self.incomes.get(&income_id).cloned()
        }
    }
}